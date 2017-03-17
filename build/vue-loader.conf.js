var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var autoprefixerInstance = autoprefixer({
  browsers: ['last 2 versions']
});

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
