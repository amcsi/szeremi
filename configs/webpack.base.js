const path = require('path');
const Immutable = require('immutable');

/**
 * @type {Immutable.Map}
 */
const configMap = Immutable.fromJS({
  context: path.normalize(`${__dirname}/..`),
  cache: false,
  debug: false,
  module: {
    loaders: [
      {
        // This is a custom property.
        name: 'jsx',
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
        exclude: /node_modules/,
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.gif$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.woff2?(\?.*)?$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.(eot|ttf|svg)(\?.*)?$/, loader: 'file-loader?prefix=font/' },
      { test: /\.html/, loader: 'html-loader' },
      // Null-load these by default; they only make sense on the client side.
      { name: 'sass', test: /\.scss/, loader: 'null' },
      { name: 'css', test: /\.css$/, loader: 'null' },
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
    ],
  },
  node: {
    __dirname: true,
    fs: 'empty',
  },
  // Items meant to be shared by several configs.
  _shared: {
    client: {
      target: 'web',
      entry: {
        app: [
          './app/client.js',
        ],
      },
      output: {
        path: path.join(__dirname, '../public/build'),
        publicPath: '/build/',
        filename: '[name].js',
      },
    },
  },
});
module.exports = configMap;
