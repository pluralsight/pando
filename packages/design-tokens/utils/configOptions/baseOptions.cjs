const yaml = require('yaml')
const { filterByTheme } = require('../filters/index.cjs')

// filters

function getDefaultFileConfig(theme) {
  return {
    filter: (token) => filterByTheme(token, theme),
  }
}

// transforms

const cssTransforms = ['name/cti/ps-kebab']
const jsTransforms = ['name/cti/ps-camel']

// parsers

const parsers = [
  {
    pattern: /\.yaml$/,
    parse: ({ contents }) => yaml.parse(contents),
  },
]

module.exports = {
  parsers,
  getDefaultFileConfig,
  cssTransforms,
  jsTransforms,
}
