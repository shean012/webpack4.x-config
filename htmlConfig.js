const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports.indexHtml = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  chunks: ['index']
})

module.exports.listHtml = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'index.html'),
  filename: 'list.html',
  chunks: ['list']
})