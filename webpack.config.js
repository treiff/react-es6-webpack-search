var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: {
    //javascript: "./app.js",
    html: "./index.html",
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './app.js' // Your appʼs entry point
    ]
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    },
    {
      test: /.jsx$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"]
    },
    {
      test: /\.html$/,
      loaders: ["react-hot", "file?name=[name].[ext]"]
    }
    ]
  }
};
