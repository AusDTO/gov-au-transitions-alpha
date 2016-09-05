var webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PLUGINS = [
  new ExtractTextPlugin('stylesheets/application.css', {
    disable: false,
    allChunks: true
  }),
  new CopyWebpackPlugin([
    {
      from: path.join(__dirname, '_assets/fonts'), 
      to: path.join(__dirname, '_site/assets/stylesheets/fonts')
    }
  ])
]

module.exports = {
    context: path.join(__dirname),
    entry: {
      'javascripts/bin/app.bundle.js' : './_assets/javascripts/app.js',
      'stylesheets/application.css': './_assets/stylesheets/_application.scss'
    },
    output: {
        path: './_assets/',
        filename: '[name]'
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
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    }
};
