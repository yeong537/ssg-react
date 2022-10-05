const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./common');

const devConfig = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
  },
});

module.exports = devConfig;
