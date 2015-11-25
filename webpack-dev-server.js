var webpack = require('webpack');
var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

var port = 3000;
config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + port);
var compiler = webpack(config);

var devServer = new WebpackDevServer(compiler, {
    contentBase: config.output.publicPath,
    inline: true,
    hot: true,
    quiet: false,
    noInfo: false,
    stats: { colors: true }
});
// launch webpack dev server
devServer.listen(port, function() {
    console.log('[webpack-dev-server]' + ' listening on port ' + port);
    console.log('[webpack-dev-server]' + ' building the app...');
});
