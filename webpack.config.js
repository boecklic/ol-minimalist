const path = require('path');
const webpack = require('webpack');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'src', 'main.js')
    ],
    output: {
        path: __dirname,
        filename: 'app.min.js'
    },
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
    }
};