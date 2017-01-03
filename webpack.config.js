var path = require('path');
module.exports = {
    entry: "./app.js",
    output: {
        filename: "./app.bundle.js",
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ["node_modules", "bower_components"],
            loader: "babel",
            query: {
                presets: ["es2015"]
            }
        }]
    }
}