const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isDevelopment = process.env["IS_DEV"] === 'true';

const devConfig = {
    devtool: 'inline-source-map',
    plugins: []
};

const productionConfig = {
    devtool: '',
    plugins: []
};

const additionalConfig = isDevelopment ? devConfig : productionConfig;

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })].concat(additionalConfig.plugins),
    devtool: additionalConfig.devtool
};