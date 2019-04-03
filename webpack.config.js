const {resolve} = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const entryConfig = require('./build/entry.config');



module.exports = {
  entry: require('./build/entry.config.js'),
  output: require('./build/output.config.js'),
  resolve: require('./build/resolve.config.js'),
  module: require('./build/module.product.config.js'),
  plugins: require('./build/plugins.product.config.js')
};
