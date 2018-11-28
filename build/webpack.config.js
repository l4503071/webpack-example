const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const r = (path) => resolve(__dirname, path)

module.exports = (env, argv) => {
  const config = {
    entry: r('../src/index.js'),
    output: {
      path: r('../dist/'),
      filename: '[name].[hash].js'
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
      new htmlWebpackPlugin({
        template: r('../src/template.html'),
        filename: 'template.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
  const idDev = argv.mode === 'development';
  if(idDev) {
    config.devServer = {
      contentBase: r('../dist/'),
      port: 3000,
      open: true,
      hot: true,
      overlay: {
        errors: true
      }
    };
    config.devtool = '#cheap-module-eval-source-map';
  }
  return config;
}