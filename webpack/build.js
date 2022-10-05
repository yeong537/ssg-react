const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./common');

const buildConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve('build'),
    filename: '[name].min.js',
  },
});

// console.log('MODE =', process.env.NODE_ENV);

module.exports = buildConfig;
