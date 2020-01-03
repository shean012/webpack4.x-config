const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { indexHtml, listHtml } = require('./htmlConfig.js')

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src/index.js'),
    list: path.join(__dirname, 'src/list.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    indexHtml,
    listHtml,
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 4000,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}