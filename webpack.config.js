module.exports = {
    devServer: {
        compress: true,
        disableHostCheck: true, // That solved it
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
