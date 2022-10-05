const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./common');
const serverConfig = require('./server');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: serverConfig,
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
  },
});

// console.log('MODE =', process.env.NODE_ENV);

module.exports = devConfig;
