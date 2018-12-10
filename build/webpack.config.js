const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const notifierWebpackPlugin = require('webpack-notifier')

const r = (path) => resolve(__dirname, path)

module.exports = (env, argv) => {
  const config = {
    entry: r('../src/index.js'),
    output: {
      path: r('../dist/'),
      filename: '[name].[hash].js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules:[
        {
          enforce: 'pre',
          test:/\.(js|jsx)$/,
          loader:'eslint-loader',
          exclude:/node_modules/,
          options: {
            // fix: true,
            // cache: true,
            // formatter: require("eslint-friendly-formatter")
          }
        },{
          test:/\.(js|jsx)$/,
          use:['babel-loader'],
          exclude:/node_modules/
        }, {
          test: /\.(jpg|png|gif)$/,
          use: ['file-loader']
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
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
      historyApiFallback:{
        rewrites: [
          {
            from: /^\/$/, to: '/template.html'
          }
        ]
      },
      contentBase: r('../dist/'),
      port: 3000,
      open: true,
      hot: true,
      overlay: {
        errors: true
      }
    };
    config.devtool = '#cheap-module-eval-source-map';
    config.plugins.push(new notifierWebpackPlugin({
      title: 'webpack测试项目',
      excludeWarnings: true,
      alwaysNotify: true
    }))
  }
  return config;
}
