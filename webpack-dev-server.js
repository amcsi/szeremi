// Strict mode is needed for 'let' to work.
'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const port = 3000;

const config = require('./webpack.config.js');
config.devtool = 'sourcemaps';
config.debug = true;
config.entry.app.unshift('webpack-hot-middleware/client');
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
const compiler = webpack(config);

const devServer = express();
devServer.use(require('webpack-dev-middleware')(compiler, {
  // Where the fallback files e.g. index.html and images should be served from.
  contentBase: 'public/',
  // Where the webpack magic files should be server from.
  publicPath: config.output.publicPath,
  inline: true,
  hot: true,
  quiet: false,
  noInfo: false,
  stats: {
    // Do not display chunk information on output.
    chunks: false,
    colors: true,
  },
}));

devServer.use(require('webpack-hot-middleware')(compiler));

devServer.get('*', function onGet(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

function DevServer(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('[webpack-dev-server]' + ' listening on port ' + port);
  console.log('[webpack-dev-server]' + ' building the app...');
}

// launch webpack dev server
devServer.listen(port, DevServer);
