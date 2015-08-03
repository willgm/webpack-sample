module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js",

        // export itself to a global var
        libraryTarget: "umd",
        // name of the global var: "Foo"
        library: "MyPackage"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};