const webpack = require('webpack')
const { resolve } = require('path')

const r = (path) => resolve(__dirname, path)

module.exports = {
  target: 'node',
  entry: {
    index: r('../src/index-ssr.js')
  },
  output: {
    path: r('../dist/'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules:[
      {
        test:/.(js|jsx)$/,
        use:['babel-loader'],
        exclude:/node_modules/
      }
    ]
  }
}