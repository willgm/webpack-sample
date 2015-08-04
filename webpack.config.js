module.exports = {
    entry: {
        entry: "./entry.js",
        test: "./test.js"
    },
    output: {
        path: __dirname,
        filename: "[name].bundle.js",

        // export itself to a global var
        libraryTarget: "umd",
        // name of the global var: "Foo"
        library: "MyPackage"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                stage: 0
              }
            }
        ]
    }
};