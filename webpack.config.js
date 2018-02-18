const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isDevelopment = process.env["IS_DEV"] === 'true';

const devConfig = {
    entries: ['react-hot-loader/patch'],
    devtool: 'inline-source-map',
    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
    devServer: {
        hot: true
    }
};

const productionConfig = {
    entries: [],
    devtool: '',
    plugins: [],
    devServer: null
};

const additionalConfig = isDevelopment ? devConfig : productionConfig;

module.exports = {
    entry: additionalConfig.entries.concat(['./src/renderer/index.jsx']),
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
        template: 'src/renderer/index.html'
    })].concat(additionalConfig.plugins),
    devtool: additionalConfig.devtool,
    devServer: additionalConfig.devServer
};