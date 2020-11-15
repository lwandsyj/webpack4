const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = dir =>{
    return path.join(__dirname,dir)
}

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:rootDir('./dist'),
        chunkFilename:"[id].[chunkhash].js"
    },
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin()
    ]
}