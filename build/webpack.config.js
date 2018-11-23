const webpack = require('webpack')
const { resolve } = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const r = (path) => resolve(__dirname, path)

module.exports = {
  entry: {
    index: r('../src/index.js')
  },
  output: {
    path: r('../dist/'),
    filename: '[name].[hash].js'
  },
  devtool: '#cheap-module-eval-source-map',
  devServer:{
    port: 3000,
    open: true
  },
  module: {
    rules:[
      {
        test:/.(js|jsx)$/,
        use:['babel-loader'],
        exclude:/node_modules/
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(r('../dist/')),
    new htmlWebpackPlugin({
      template: r('../src/index.html')
    })
  ]
}