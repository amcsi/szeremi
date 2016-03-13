// noinspection JSUnresolvedVariable
module.exports = {
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
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000'},
      {test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000'},
      {test: /\.gif$/, loader: 'url-loader?prefix=img/&limit=5000'},
      {test: /\.woff2?$/, loader: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.eot$/, loader: 'file-loader?prefix=font/'},
      {test: /\.ttf$/, loader: 'file-loader?prefix=font/'},
      {test: /\.svg$/, loader: 'file-loader?prefix=font/'},
    ],
    noParse: /\.min\.js/,
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
  node: {
    __dirname: true,
    fs: 'empty',
  },
};
