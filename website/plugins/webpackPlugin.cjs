const { resolve } = require('path')

module.exports = function () {
  return {
    name: 'pando/webpack-plugin',
    configureWebpack(config) {
      return {
        entry: {
          polyfills: resolve(__dirname, '../src/libs/polyfills.js'),
          index: config.entry,
        },
        // output: {
        //   ...config.output,
        //   filename: '[name].bundle.js',
        // },
      }
    },
  }
}
