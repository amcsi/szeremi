const webpack = require('webpack');
const baseConfig = require('./webpack.server.js');

module.exports = Object.assign({}, baseConfig, {
  cache: true,
  debug: true,
  entry: ['webpack/hot/poll?1000', ...baseConfig.entry],
  module: Object.assign({}, baseConfig.module, {
    loaders: baseConfig.module.loaders.map(function loaderMap(loader, index) {
      if (index === 0) {
        // js(x) config
        return Object.assign({}, loader, {
          query: Object.assign({}, loader.query, {
            presets: [...loader.query.presets, 'react-hmre'],
            cacheDirectory: '',
          }),
        });
      }
      return loader;
    }),
  }),
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: false, __DEV__: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});
