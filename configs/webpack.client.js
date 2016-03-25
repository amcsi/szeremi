const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./webpack.base.js');
// noinspection JSUnresolvedFunction
module.exports = Object.assign({}, base, {
  target: 'web',
  entry: {
    app: [
      './app/client.js',
    ],
  },
  module: Object.assign({}, base.module, {
    loaders: [
      ...base.module.loaders,
      {
        name: 'css',
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        name: 'sass',
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader'),
      },
    ],
  }),
  output: {
    path: path.join(__dirname, '../public/build'),
    publicPath: '/build/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: true,
      __DEV__: false }
    ),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: { warnings: false } }),
    new ExtractTextPlugin('styles.css'),
  ],
});
