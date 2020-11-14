const path = require('path');

const rootDir = (dist) =>{
    return path.join(__dirname,dist)
}

module.exports={

    entry:"./src/index.js", // webpack 入口文件
    output:{
        filename:'main.js',
        path: rootDir("./dist")
    }

}