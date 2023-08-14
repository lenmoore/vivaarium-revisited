module.exports = {
    devServer: {
        client: {
            logging: 'none',
        },
        compress: true,
        host: 'localhost',
        port: 3035,
        https: false,
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        },
        allowedHosts: 'all',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        static: {
            watch: {
                ignored: '/node_modules/',
            },
        },
    },
};
