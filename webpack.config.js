//const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    devServer: {
        port: 5566,
    },
    entry: `${SRC_DIR}/App.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
