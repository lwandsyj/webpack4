1. 初始化项目

        npm init -y 

2. 安装 webpack webpack-cli 

        npm install webpack webpack-cli -D

3. 创建webpack.config.js 

        touch  webpack.config.js

4. 配置webpack.config.js

        const path = require('path');

        const rootDir = dist => {
            return path.join(__dirname,dist)
        }

        module.exports ={
            entry:["./src/index.js","./src/main.js"], // 入口文件为数组形式
            output:{
                filename:"main.js", // 打包js 文件名称
                path:rootDir("./dist") // 输出文件目录，webpack4 要求绝对路径
            }
        }

5. 执行 webpack

        npx  webpack

6. 数组形式适用于index.js 文件找不到main.js 文件的入口