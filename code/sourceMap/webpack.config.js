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
    devtool:'source-map'
}