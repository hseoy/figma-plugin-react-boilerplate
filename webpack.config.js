'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack-configs/webpack.common');
const developmentConfig = require('./webpack-configs/webpack.dev');
const productionConfig = require('./webpack-configs/webpack.prod');

module.exports = (_env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const config = isDevelopment ? developmentConfig : productionConfig;
  return merge(common, config);
};
