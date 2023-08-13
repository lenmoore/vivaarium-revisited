module.exports = {
    devServer: {
        proxy: 'http://localhost:80',
        allowedHosts: [
            'localhost',
            'example.com',
            '192.168.1.1',
            'ondigitalocean.app',
            '.ondigitalocean.app',
            '*.ondigitalocean.app',
        ],
    },
};
