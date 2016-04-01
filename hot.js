const path = require('path');
const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const port = 3000;

const config = require('./configs/webpack.client-dev.js');
const compiler = webpack(config);

const devServer = express();
devServer.use(require('webpack-dev-middleware')(compiler, config.devServer));
devServer.use(require('webpack-hot-middleware')(compiler));
// Fall back to static files.
devServer.get('*', (req, res) => {
  const absolutePublicPath = path.join(__dirname, config.devServer.contentBase);
  const pathToStaticFile = path.join(absolutePublicPath, req.path);
  // Query the entry to see if there is a static file under the requested path.
  fs.lstat(pathToStaticFile, (err, stats) => {
    if (!err && stats.isFile()) {
      // There is, so send that static file.
      return res.sendFile(pathToStaticFile);
    }

    // Such a file was not found, so fall back to serving index.html.
    res.sendFile(path.join(absolutePublicPath, 'index.html'));
  });
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
