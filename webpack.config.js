const webpack = require('webpack')
const { resolve } = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const r = (path) => resolve(__dirname, path)
console.log(r('./'))
module.exports = {
  entry: {
    index: r('./src/index.js')
  },
  output:{
    path:r('./dist/'),
    filename:'[name].js'
  },
  module:{

  },
  plugins:[
    new cleanWebpackPlugin(r('./dist/')),
    new htmlWebpackPlugin({
      template:r('./src/index.html')
    })
  ]
}