module.exports = {
    outputDir: 'dist', // The output directory for the production build

    // Configure Nginx to handle the history mode of Vue Router
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
    },

    // Production build settings
    productionSourceMap: false, // Disable source maps in production
    assetsDir: 'static', // Directory for static assets (images, fonts, etc.)

    // Additional configuration options here
};
