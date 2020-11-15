1. 创建package.json

        npm init -y

2. 安装webpack webpack-cli html-webpack-plugin

        npm install webpack webpack-cli -D

        npm install html-webpack-plugin -D

3. 创建webpack.config.js 文件

        touch webpack.config.js

4. 配置webpack

> 配置publicPath

        module.exports = {
            entry:"./src/index.js",
            output:{
                filename:"main.js",
                path:rootDir('./dist'),
                publicPath:"/static"
            },
            mode:"development",
            plugins:[
                new HtmlWebpackPlugin()
            ]
        }

   生成的文件如下图:

   ![avatar](../../assets/publicPath.jpg)

> 不带publicPath 生成的文件

        const path = require('path');

        const HtmlWebpackPlugin = require('html-webpack-plugin')

        const rootDir = dir =>{
            return path.join(__dirname,dir)
        }

        module.exports = {
            entry:"./src/index.js",
            output:{
                filename:"main.js",
                path:rootDir('./dist')
            },
            mode:"development",
            plugins:[
                new HtmlWebpackPlugin()
            ]
        }
    
   生成的文件如下图:

   ![avatar](../../assets/publicPath1.jpg)

5. 为异步加载js 设置名称，webpack 默认为 [id].js

        output:{
            filename:"main.js",
            path:rootDir('./dist'),
            chunkFilename:"[id].[chunkhash].js"
        },

6. mode: development 和 production 

> development 

        module.exports ={
            entry:"./src/index.js",
            output:{
                filename:"main.js",
                path:path.join(__dirname,'./dist')
            },
            mode:"development" // “production”
        }

   ![avatar](../../assets/development.jpg)

> mode 为production , 如果不设置mode ,默认为production 


   ![avatar](../../assets/production.jpg)
   


   