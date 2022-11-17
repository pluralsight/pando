'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./node/styles.production.min.js')
} else {
  module.exports = require('./node/styles.development.js')
}
