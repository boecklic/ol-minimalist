const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');  // cleanup of the dist folder before a build
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].min.js' // this becomes e.g. app.min.js
    },
    plugins: [
        new CleanWebpackPlugin(),    // do some cleanup first
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            templateParameters: {
                "target": "desktop"
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'mobile.html',
            templateParameters: {
                "target": "mobile"
            }
        })
    ],
    watchOptions: {
        // watchOptions are necessary to track changes in 
        // dependency modules (e.g. node_modules) as well
        aggregateTimeout: 300,
        poll: 1000, // How often check for changes (in milliseconds)
    },/*,
    optimization: {
        minimizer: [
          new ClosurePlugin({mode: 'STANDARD'}, {
            // compiler flags here
            //
            // for debuging help, try these:
            //
            // formatting: 'PRETTY_PRINT'
            // debug: true,
            // renaming: false
          })
        ]
    }*/
};