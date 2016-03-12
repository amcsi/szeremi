const webpack = require('webpack');
const path = require('path');

// noinspection JSUnresolvedVariable
module.exports = Object.assign({}, require('./webpack.base.js'), {
  target: 'web',
  entry: {
    app: [
      './app/client.js',
    ],
  },
  output: {
    path: path.join(__dirname, '../public/build'),
    publicPath: '/build/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 20}),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
});
