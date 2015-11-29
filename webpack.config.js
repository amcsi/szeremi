const webpack = require('webpack');
const path = require('path');
// noinspection JSUnresolvedVariable
module.exports = {
  entry: {
    app: [
      './app/app.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'public/build'),
    publicPath: '/build/',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /[\/\\]app[\/\\]/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000'},
      {test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000'},
      {test: /\.gif$/, loader: 'url-loader?prefix=img/&limit=5000'},
      {test: /\.woff$/, loader: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.eot$/, loader: 'file-loader?prefix=font/'},
      {test: /\.ttf$/, loader: 'file-loader?prefix=font/'},
      {test: /\.svg$/, loader: 'file-loader?prefix=font/'},
    ],
    preLoaders: [
      // {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
  },
  eslint: {
    eslint: {
      configFile: '.eslintrc',
    },
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: [
      'node_modules',
      'app/components',
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 20}),
  ],
};
