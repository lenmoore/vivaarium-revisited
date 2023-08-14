module.exports = {
    publicPath: '/', // Change this if your app will be served from a subdirectory

    outputDir: 'dist', // The output directory for the production build

    // Configure Nginx to handle the history mode of Vue Router
    devServer: {
        historyApiFallback: true,
    },

    // Production build settings
    productionSourceMap: false, // Disable source maps in production
    assetsDir: 'static', // Directory for static assets (images, fonts, etc.)

    // Additional configuration options here
};
