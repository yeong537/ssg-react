const path = require('path');

const serverConfig = {
  // static: ['public'],
  static: {
    directory: path.resolve('public'),
  },
  client: {
    overlay: true,
  },
  hot: true,
  compress: true,
  liveReload: true,
  historyApiFallback: true,
  host: 'localhost',
  port: 3000,
  open: false,
};

module.exports = serverConfig;
