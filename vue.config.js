module.exports = {
    devServer: {
        https: true, // Enable HTTPS for the development server
        host: 'localhost', // Hostname for the development server
        port: 8080, // Port for the development server
        allowedHosts: [
            'localhost',
            'example.com',
            '192.168.1.1',
            'ondigitalocean.app',
            '.ondigitalocean.app',
            '*.ondigitalocean.app',
        ],

        hot: false,
        liveReload: false,
    },
};
