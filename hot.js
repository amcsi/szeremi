const path = require('path');
const express = require('express');
const webpack = require('webpack');
const port = 3000;

const config = require('./configs/webpack.client-watch.js');
config.entry.app.unshift('webpack-hot-middleware/client');
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
const compiler = webpack(config);

const devServer = express();
devServer.use(require('webpack-dev-middleware')(compiler, config.devServer));
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
