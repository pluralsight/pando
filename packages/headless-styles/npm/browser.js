'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./browser/index.production.min.js')
} else {
  module.exports = require('./browser/index.development.js')
}
