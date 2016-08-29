var webpack = require('webpack')

module.exports = {
    entry: './_assets/javascripts/app.js',
    output: {
        path: './_assets/javascripts/bin',
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    plugins: process.env.NODE_ENV === 'production' ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ] : [],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};
