const webpack = require('webpack');
const port = 3000;
const hostname = process.env.HOSTNAME || 'localhost';
const merge = require('./merge');
const baseConfigMap = require('./webpack.base.js');
// noinspection JSUnresolvedFunction
const sharedClientConfigMap = baseConfigMap.getIn(['_shared', 'client']);
const clientWatchConfig = merge(baseConfigMap, sharedClientConfigMap, {
  devtool: 'eval',
  cache: true,
  debug: true,
  entry: sharedClientConfigMap.get('entry')
    // Include webpack-hot-middleware in every entry (which is probably only 'app')
    .map(entry => entry.unshift('webpack-hot-middleware/client')),
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: false,
      __DEV__: true,
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: baseConfigMap.getIn(['module', 'loaders']).map(loader => {
      const loaderName = loader.get('name');
      if (loaderName === 'jsx') {
        return merge(loader, {
          query: {
            presets: loader.getIn(['query', 'presets']).push('react-hmre'),
            cacheDirectory: '',
          },
        });
      }
      // Override CSS and related loaders to load them into the file for the devServer.
      if (loaderName === 'css') {
        return loader.merge({ loader: 'style-loader!css-loader' });
      }
      if (loaderName === 'sass') {
        return loader.merge({ loader: 'style-loader!css-loader!sass-loader' });
      }
      return loader;
    }),
  },
  devServer: {
    contentBase: 'public',
    // e.g. '/build'
    publicPath: sharedClientConfigMap.getIn(['output', 'publicPath']),
    hot: true,
    inline: true,
    lazy: false,
    quiet: false,
    noInfo: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true, chunks: false },
    host: hostname,
    port,
  },
}).toJS();
module.exports = clientWatchConfig;
