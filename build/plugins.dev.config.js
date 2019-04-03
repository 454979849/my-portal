const webpack = require('webpack');
const pluginsConfig = require('./inherit/plugins.config.js');

pluginsConfig.push(
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: '"development"'}
  })
);

/*pluginsConfig.push(
    new webpack.HotModuleReplacementPlugin()
);

pluginsConfig.push(
    new webpack.NamedModulesPlugin()
);*/

module.exports = pluginsConfig;
