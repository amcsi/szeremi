// Strict mode is needed for 'let' to work.
'use strict';
const webpack = require('webpack');
const config = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const port = 3000;
let compiler;
let devServer;

config.entry.app.unshift('webpack-dev-server/client?http://localhost:' + port, 'webpack/hot/dev-server');
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
compiler = webpack(config);

devServer = new WebpackDevServer(compiler, {
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
});

function DevServer() {
  console.log('[webpack-dev-server]' + ' listening on port ' + port);
  console.log('[webpack-dev-server]' + ' building the app...');
}

// launch webpack dev server
devServer.listen(port, DevServer);
