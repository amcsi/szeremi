const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, './public');

app.enable('trust proxy');

app.route('/').get(function onRoot(req, res) {
  res.header('Cache-Control', 'max-age=60, must-revalidate, private');
  res.sendFile('index.html', {
    root: publicPath,
  });
});

app.use('/', express.static(publicPath, {
  maxage: 31557600,
}));

const server = app.listen(process.env.PORT || 8080, function listen() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
