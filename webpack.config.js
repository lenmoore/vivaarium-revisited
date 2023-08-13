import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080,
        compress: true,

        // 👇️ set this property
        allowedHosts: 'all',
    },
    optimization: {
        minimize: true,
        removeAvailableModules: true,
        flagIncludedChunks: true,
        usedExports: true,
        concatenateModules: true,
        sideEffects: false, // <----- in prod defaults to true if left blank
    },
};
