module.exports = {
    devServer: {
        host: 'localhost',
        hot: true,
        allowedHosts: 'all',
        https: false,
    },

    configureWebpack: {
        entry: { app: './src/main.js' },

        output: {
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[hash].js',
        },

        resolve: {
            extensions: ['.js', '.vue', '.scss'],
            alias: require(`${__dirname}/config/aliases`),
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
    chainWebpack(config) {
        // Only enable performance hints for production builds, outside of tests.
        config.performance.hints(
            process.env.NODE_ENV === 'production' &&
                !process.env.VUE_APP_TEST &&
                'warning'
        );
    },

    css: {
        sourceMap:
            process.env.NODE_ENV === 'development' || !!process.env.TEST_ENV,
        loaderOptions: {
            sass: {
                prependData: `
                    @import '@styles/_variables.scss';
                `,
            },
        },
    },

    lintOnSave: false,
};
