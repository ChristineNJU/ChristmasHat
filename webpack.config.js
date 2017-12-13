const
webpack = require('webpack'),
path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    'index/home': './app/entries/home', 
    'common': ['vue']
  },
  output: {
    path: path.resolve(__dirname, './assets'),
    publicPath: './',
    filename: '[name].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {}
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: 'less-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif|svg|woff2|eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]'
      }
    }]
  }
};