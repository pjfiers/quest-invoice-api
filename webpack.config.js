var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './main.js',
  output: {path: __dirname, filename: './dist/bundle.js' },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'electron']
        }
      }
    ]
  },
};