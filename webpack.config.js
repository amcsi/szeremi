var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: {
        app: [
            './app/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, "public/assets"),
        publicPath: "public/",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.json$/,   loader: "json-loader" },
            { test: /\.css$/,    loader: "style-loader!css-loader" },
            { test: /\.scss/,   loader: "style-loader!css-loader!sass-loader" },
            { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
            { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
        ],
        preLoaders: [
            {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
        ]
    },
    eslint: {
        eslint: {
            configFile: '.eslintrc'
        }
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
        modulesDirectories: [
            'node_modules',
            'app/components'
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 })
    ]
};
function escapeRegExpString(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
function pathToRegExp(p) { return new RegExp("^" + escapeRegExpString(p)); }
