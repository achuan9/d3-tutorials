const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'd3.js',
      template: path.resolve(__dirname, "public/index.html")
    }),
    new CopyWebpackPlugin([
      path.resolve(__dirname, "public")

    ])
  ]
};
