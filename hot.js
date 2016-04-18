const path = require('path');
const express = require('express');
const webpack = require('webpack');
const port = process.env.DEV_PORT || 3000;

const config = require('./configs/webpack.client-dev.js');
const compiler = webpack(config);

const absolutePublicPath = path.join(__dirname, config.devServer.contentBase);

const devServer = express();
devServer.use(require('webpack-dev-middleware')(compiler, config.devServer));
devServer.use(require('webpack-hot-middleware')(compiler));
devServer.use(express.static(absolutePublicPath));
devServer.use((req, res) => res.sendFile(path.join(absolutePublicPath, 'index.html')));

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
