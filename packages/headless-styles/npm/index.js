'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./node/index.production.min.js')
} else {
  module.exports = require('./node/index.development.js')
}
