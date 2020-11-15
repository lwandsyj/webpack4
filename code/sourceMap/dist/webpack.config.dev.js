"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

var rootDir = function rootDir(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: rootDir('./dist')
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  mode: 'development',
  devServer: {
    port: 9000
  },
  // devtool:'source-map' // 生成单独的map 文件到dist 目录中
  devtool: 'cheap-module-eval-source-map'
};