const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.ts', // Your app's TypeScript entry point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                loader: 'css-loader',
                options: {
                    esModule: false,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Creates style nodes from JS strings
                    'css-loader', // Translates CSS into CommonJS
                    'sass-loader', // Compiles Sass to CSS
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.runtime.esm-bundler.js', // Use the runtime-only build
            '@': path.resolve(__dirname, 'src'), // Adjust the path as needed
        },
    },
    plugins: [new VueLoaderPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
};
