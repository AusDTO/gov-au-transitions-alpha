module.exports = {
    entry: './_assets/javascripts/app.js',
    output: {
        path: './_assets/javascripts/bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};
