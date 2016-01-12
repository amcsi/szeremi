const webpack = require('webpack');
const path = require('path');

// noinspection JSUnresolvedVariable
module.exports = Object.assign({}, require('./webpack.base.js'), {
  entry: {
    app: [
      './app/app.js',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 20}),
  ],
});
