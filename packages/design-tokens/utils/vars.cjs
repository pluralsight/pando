const yaml = require('yaml')
const baseFilter = require('./filters/baseFilter.cjs')
const jsFilter = require('./filters/jsFilter.cjs')

const BUILD_PATH = 'build/'

// filters

const baseFileConfig = {
  filter: baseFilter,
}
const jsFileConfig = {
  filter: jsFilter,
}

// transforms

const jsTransforms = ['name/cti/camel']
const cssTransforms = ['name/cti/kebab']

// parsers

const parsers = [
  {
    pattern: /\.yaml$/,
    parse: ({ contents }) => yaml.parse(contents),
  },
]

const skillsSources = [
  'tokens/base/*.yaml',
  'tokens/public/color.yaml',
  'tokens/public/lightJS.yaml',
]

// platforms

const data = {
  transformGroup: 'js',
  transforms: [...jsTransforms],
  buildPath: BUILD_PATH,
  files: [
    {
      ...baseFileConfig,
      destination: 'cssProperties.mjs',
      format: 'tokenDataSources',
    },
    {
      ...baseFileConfig,
      destination: 'normalize.json',
      format: 'normalizeData',
    },
  ],
}

const es6 = {
  transformGroup: 'js',
  transforms: jsTransforms,
  buildPath: BUILD_PATH,
  files: [
    {
      ...jsFileConfig,
      destination: 'wrapper.mjs',
      format: 'javascript/es6',
    },
  ],
}

const commonjs = {
  transformGroup: 'commonjs',
  transforms: jsTransforms,
  buildPath: BUILD_PATH,
  files: [
    {
      ...jsFileConfig,
      destination: 'index.cjs',
      format: 'javascript/module-flat',
    },
  ],
}

const ts = {
  transformGroup: 'ts',
  transforms: jsTransforms,
  buildPath: BUILD_PATH,
  files: [
    {
      ...jsFileConfig,
      destination: 'index.d.ts',
      format: 'typescript/es6-declarations',
    },
  ],
}

const css = {
  transformGroup: 'css',
  transforms: cssTransforms,
  buildPath: 'build/css/',
  files: [
    {
      ...baseFileConfig,
      destination: 'variables.css',
      format: 'css/variables',
    },
  ],
}

const scss = {
  transformGroup: 'scss',
  transforms: cssTransforms,
  buildPath: 'build/scss/',
  files: [
    {
      ...baseFileConfig,
      destination: '_variables.scss',
      format: 'scss/variables',
    },
  ],
}

const vars = {
  data,
  commonjs,
  css,
  es6,
  parsers,
  scss,
  skillsSources,
  ts,
  baseFileConfig,
}

module.exports = vars
