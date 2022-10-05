const vars = require('./utils/vars.cjs')

const buildPath = 'npm/flow/'

module.exports = {
  parsers: vars.parsers,
  source: [
    'tokens/base/*.yaml',
    'tokens/public/flow/color.yaml',
    'tokens/public/flow/colorJS.yaml',
    'tokens/public/flow/lightJS.yaml',
  ],
  platforms: {
    js: {
      ...vars.es6,
      buildPath,
    },
    common: {
      ...vars.commonjs,
      buildPath,
    },
    ts: {
      ...vars.ts,
      buildPath,
    },
    scss: {
      ...vars.scss,
      buildPath: `${buildPath}scss/`,
    },
  },
}
