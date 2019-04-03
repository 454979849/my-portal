const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //vue-loader

const {publicPath} = require('../output.config');

const dir = require('../base/dir');
const pageArr = require('../base/pageArr');

const configPlugins = [
  new CopyWebpackPlugin([
    {
      from: resolve(__dirname, '../../static'),
      to: dir.distDir + '/static'
    }
  ]),
  new VueLoaderPlugin(),
  // 全局shimming，自动加载模块，而不必到处 import 或 require 。
  // 将jq暴露到全局范围去，并不需要结合export-loader使用，这里直接就暴露出去了。
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    Popper: ['popper.js', 'default']
  }),

  new ExtractTextPlugin({
    filename: 'public/css/[name].css?v=[contentHash:8]'
  }),

  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    // 需要注意的是，chunk的name不能相同！！！
    name: 'common/common',
    // filename: 'public/js/[name].js?v=[chunkHash:8]',
    minChunks: 4
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common/runtime'
  })
];

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'views/' + page + '.html',
    template: resolve(dir.pageDir, page + '/index.art'),
    favicon: resolve(__dirname, '../../favicon.ico'),
    publicPath:publicPath,
    // 压缩html
    /*minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
    },*/
    chunks: ['common/runtime', 'common/common', page]
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;
