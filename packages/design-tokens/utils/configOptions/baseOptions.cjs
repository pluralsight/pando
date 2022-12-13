const yaml = require('yaml')
const { filterByTheme } = require('../filters/index.cjs')

const BUILD_PATH = 'npm/'
const META_BUILD_PATH = `${BUILD_PATH}meta/`

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
  BUILD_PATH,
  META_BUILD_PATH,
  parsers,
  getDefaultFileConfig,
  cssTransforms,
  jsTransforms,
}
