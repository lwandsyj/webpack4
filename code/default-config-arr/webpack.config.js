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