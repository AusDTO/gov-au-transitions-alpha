var webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PLUGINS = [
  new ExtractTextPlugin('../../../_site/assets/stylesheets/application.css?[contenthash]', {
    disable: false,
    allChunks: true
  })
]

module.exports = {
    entry: './_assets/javascripts/app.js',
    output: {
        path: './_assets/javascripts/bin',
        filename: 'app.bundle.js'
    },
    resolve: {
      root: [
        path.resolve('./_assets')
      ]
    },
    devtool: 'source-map',
    plugins: process.env.NODE_ENV === 'production' ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ].concat(PLUGINS) : [].concat(PLUGINS),
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
        }]
    }
};
