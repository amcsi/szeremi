const webpack = require('webpack');
const port = 3000;
const hostname = process.env.HOSTNAME || 'localhost';

const baseConfig = require('./webpack.client.js');
module.exports = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  debug: true,
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: false, __DEV__: true}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: Object.assign({}, baseConfig.module, {
    loaders: baseConfig.module.loaders.map(function loaderMap(loader) {
      if (loader.name === 'jsx') {
        return Object.assign({}, loader, {
          query: Object.assign({}, loader.query, {
            presets: [...loader.query.presets, 'react-hmre'],
            cacheDirectory: '',
          }),
        });
      }
      if (loader.name === 'css') {
        return Object.assign({}, loader, { loader: 'style-loader!css-loader' });
      }
      if (loader.name === 'sass') {
        return Object.assign({}, loader, { loader: 'style-loader!css-loader!sass-loader' });
      }
      return loader;
    }),
  }),
  devServer: {
    // Maybe this needs a trailing slash?
    contentBase: 'public',
    // e.g. '/build'
    publicPath: baseConfig.output.publicPath,
    hot: true,
    inline: true,
    lazy: false,
    quiet: false,
    noInfo: false,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true, chunks: false},
    host: hostname,
    port,
  },
});
