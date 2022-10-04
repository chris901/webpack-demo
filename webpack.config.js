const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const BundleSizeWebpackPlugin = require("./bundlesize-webpack-plugin");

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            { 
                test: /\.md$/,
                use: [
                    { loader: './md-html-loader', options: { headingStyle: "atx" }},
                    { loader: './markdown-loader', options: { headerIds: false }}
                ]
            }
        ]
    },
    plugins: [
        new BundleSizeWebpackPlugin({ sizeLimit: 3 }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin()
    ]
}


// loader 解决各种不同资源问题
// plugin 解决项目整体的问题


// 最后的loader最早调用，传入调用资源
// 第一个loader最后调用。期望值传出Javascript和source map
// 中间的loader执行时，会传入前一个loader的传出结果

// 插件格式
// 一个javascript函数或javascript类
// 在原型上定义apply方法，会在安装插件被调用，并被webpack compile调用一次
// 指定一个触及到webpack本身的事件钩子，即hooks，用于特定时机处理额外的逻辑
