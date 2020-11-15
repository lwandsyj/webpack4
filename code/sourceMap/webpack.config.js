const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const rootDir = dir =>path.join(__dirname,dir)

module.exports = {
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:rootDir('./dist')
    },
    plugins:[
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ],
    mode:'development',
    devServer:{
        port:9000
    },
    // devtool:'source-map' // 生成单独的map 文件到dist 目录中
    devtool:'cheap-module-eval-source-map'
}