var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './React/app.jsx',
  output: { path: __dirname + '/JavaScript/Scripts/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};