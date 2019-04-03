const {resolve} = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const entryConfig = require('./build/entry.config');

let dir = require('./build/base/dir');

process.env.NODE_ENV = 'production';

module.exports = {
  devServer: {
    open: true,
    inline: true,
    contentBase: dir.distDir,
    openPage: 'portal/views/index.html',
    overlay: true,
    host: '192.168.1.62',
    port: 8080
  },
  entry: require('./build/entry.config.js'),
  output: require('./build/output.config.js'),
  resolve: require('./build/resolve.config.js'),
  module: require('./build/module.dev.config.js'),
  plugins: require('./build/plugins.dev.config.js')
};
