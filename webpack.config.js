var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: {
    app: [ './app.js' ]
  },

  output: {
    filename: "app.js",
    path: __dirname + "/public"
  },

  module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loaders: ["file?name=[name].[ext]"]
      }
    ]
  }
};
