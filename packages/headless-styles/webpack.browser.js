'use-strict'

const { resolve } = require('node:path')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { devBrowserRules, prodBrowserRules } = require('./webpack/rules')

const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL

const EXPERIMENTAL =
  typeof RELEASE_CHANNEL === 'string'
    ? RELEASE_CHANNEL === 'experimental'
    : true

const externals = {
  tslib: 'tslib',
}

const output = {
  devtoolNamespace: 'headless-styles',
  module: true,
  library: {
    type: 'module',
  },
  path: resolve(__dirname, 'npm/browser'),
}

const nodeOutput = {
  devtoolNamespace: 'headless-styles',
  libraryTarget: 'commonjs',
  path: resolve(__dirname, 'npm/node'),
}

const resolveConfig = {
  alias: {
    '@pluralsight/shared': resolve(__dirname, '../shared/src/index.ts'),
  },
  conditionNames: ['import', 'require'],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
}

const experiments = {
  backCompat: true,
  css: true,
  outputModule: true,
}

const esTarget = 'es2015'

module.exports = () => {
  const channel = EXPERIMENTAL ? 'experimental' : 'stable'
  const entry = `./index.${channel}.js`
  const target = `browserslist:${resolve(
    __dirname,
    '../../.browserslistrc'
  )}:modern`

  const defaultOptions = {
    entry,
    resolve: resolveConfig,
    target,

    plugins: [],

    module: {
      rules: devBrowserRules,
    },

    externals,

    experiments,
  }

  return [
    {
      ...defaultOptions,
      mode: 'development',
      name: 'headless-browser-dev',

      devtool: 'eval-source-map',
      performance: {
        hints: 'warning',
      },

      output: {
        ...output,
        filename: 'index.development.js',
      },
    },
    {
      ...defaultOptions,
      name: 'headless-browser-prod',
      mode: 'production',

      devtool: false,

      performance: {
        hints: 'error',
      },

      optimization: {
        minimizer: [
          new ESBuildMinifyPlugin({
            css: true,
            target: esTarget,
          }),
        ],
      },

      plugins: [new MiniCssExtractPlugin()],

      module: {
        rules: prodBrowserRules,
      },

      output: {
        ...output,
        filename: 'index.production.min.js',
      },
    },
    {
      ...defaultOptions,
      mode: 'development',
      name: 'headless-node-dev',

      devtool: 'eval-source-map',
      performance: {
        hints: 'warning',
      },

      output: {
        ...nodeOutput,
        filename: 'index.development.js',
      },
    },
  ]
}
