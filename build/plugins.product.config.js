const webpack = require('webpack');
const pluginsConfig = require('./inherit/plugins.config.js');

pluginsConfig.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  })
);

pluginsConfig.push(
  new webpack.HashedModuleIdsPlugin()
);

pluginsConfig.push(
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: '"production"'}
  })
);

module.exports = pluginsConfig;
