const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'd3.js',
        template: path.resolve(__dirname, "public/index.html")
    })
  ]
};
