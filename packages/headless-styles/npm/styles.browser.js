'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./browser/styles.production.min.js')
} else {
  module.exports = require('./browser/styles.development.js')
}
