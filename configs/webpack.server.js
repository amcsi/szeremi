const webpack = require('webpack');
const path = require('path');
// This is so modules in node_modules wouldn't be attempted to be webpacked for the server-side.
const webpackNodeExternals = require('webpack-node-externals');

const baseConfigMap = require('./webpack.base.js');
const merge = require('./merge');
// noinspection JSUnresolvedFunction
const serverConfig = merge(baseConfigMap, {
  target: 'node',
  devtool: 'source-map',
  entry: {
    server: [
      './app/server.js',
    ],
  },
  output: {
    path: path.join(baseConfigMap.get('context'), 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: true,
      __DEV__: false,
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 }),
  ],
  externals: [webpackNodeExternals()],
}).toJS();
module.exports = serverConfig;
