"use strict";

let path = require("path");

let BUILD_DIR = path.resolve(__dirname, "pub/js");
let APP_DIR = path.resolve(__dirname, "src");

const config = {

    entry: APP_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: "app.js"
    },
    module: {
      loaders: [{
          test: /\.jsx?/,
          include: APP_DIR,
          loader: "babel-loader"
      }]
    }
};

module.exports = config;