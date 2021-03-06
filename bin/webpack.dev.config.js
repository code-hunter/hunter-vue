var webpack = require('webpack')
var path = require('path');
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(baseConfig, {
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    output: {
        // necessary for the html plugin to work properly
        // when serving the html from in-memory
        publicPath: '/'
    },
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            title: 'dev',
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html'),//  './public/index.html',
            inject: true
        })
    ]
})