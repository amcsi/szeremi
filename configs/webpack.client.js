const webpack = require('webpack');
const path = require('path');
const merge = require('./merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfigMap = require('./webpack.base.js');
const sharedClientConfigMap = baseConfigMap.getIn(['_shared', 'client']);
// noinspection JSUnresolvedFunction
const clientConfig = merge(baseConfigMap, sharedClientConfigMap, {
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
  module: {
    loaders: baseConfigMap.getIn(['module', 'loaders']).map(loader => {
      // Override CSS and related loaders to extract them into files.
      const loaderName = loader.get('name');
      if (loaderName === 'css') {
        return loader.set('loader', ExtractTextPlugin.extract('style', 'css'));
      }
      if (loaderName === 'sass') {
        return loader.set('loader', ExtractTextPlugin.extract('style', 'css!sass'));
      }
      return loader;
    }),
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
}).toJS();
module.exports = clientConfig;
