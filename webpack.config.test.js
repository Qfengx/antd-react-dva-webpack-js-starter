const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './test/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: '5001',
    contentBase: 'dist',
    compress: true,
    progress: true,
    historyApiFallback: true,
    proxy: {
      'api': {
        target: "http://localhost:8081",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        },
        proxyTimeout: 30000
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, 'dist')
    }),
    new CopyWebpackPlugin([
      { from: './public', to: './' }
    ])
  ],
  module: {
    rules: [
      { // 解析全部引入的css/less
        test: /\.(c|le)ss$/,
        exclude: /\.module\.(c|le)ss$/,
        use: [
          'style-loader', MiniCssExtractPlugin.loader, 'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      { // 解析模块化引入的css/less
        test: /\.module\.(c|le)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modules: true
            }
          }
        ]
      },
      { // 解析js jsx
        test: /\.j(s|sx)$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      { // 解析资源文件
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: 'iamges/[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}