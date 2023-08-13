module.exports = {
    devServer: {
        host: 'localhost',
        hot: true,
        allowedHosts: 'all',
        https: false,
    },

    configureWebpack: {
        entry: { app: './src/main.ts' },

        output: {
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[hash].js',
        },

        resolve: {
            extensions: ['.js', '.vue', '.scss'],
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        minChunks: 2,
                    },
                    vendor: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        priority: 10,
                        enforce: true,
                    },
                },
            },
        },

        devtool: 'source-map',
    },
    pluginOptions: { storybook: { allowedPlugins: ['sass', 'postcss'] } },

    lintOnSave: false,
};
