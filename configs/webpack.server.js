const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// Let's gather all the node_modules to add to the "externals"
// This is to avoid the issue with webpack trying to pack express's dynamic require.
// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
const externals = {};
fs.readdirSync('node_modules')
  .filter((x) => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    externals[mod] = 'commonjs ' + mod;
  });

// noinspection JSUnresolvedVariable
module.exports = Object.assign({}, require('./webpack.base.js'), {
  context: __dirname,
  target: 'node',
  devtool: 'source-map',
  entry: {
    server: [
      '../server.js',
    ],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 20}),
  ],
  externals,
});
