const webpack = require('webpack');

// noinspection JSUnresolvedVariable
module.exports = Object.assign({}, require('./webpack.base.js'), {
  entry: {
    server: [
      './server.js',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 20}),
  ],
});
