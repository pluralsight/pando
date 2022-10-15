'use-strict'

const { resolve } = require('node:path')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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

const esbuildLoader = 'esbuild-loader'
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
      rules: [
        {
          test: /\.ts$/,
          loader: esbuildLoader,
          options: {
            loader: 'ts',
            target: esTarget,
            // tsConfigRaw,
          },
        },
        {
          test: /\.tsx$/,
          loader: esbuildLoader,
          options: {
            loader: 'tsx',
            target: esTarget,
            // tsConfigRaw,
          },
        },
        {
          test: /\.js$/,
          loader: esbuildLoader,
          options: {
            loader: 'js',
            target: esTarget,
          },
        },
        {
          test: /\.module\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
              },
            },
          ],
        },
      ],
    },

    externals,

    experiments,
  }

  return [
    {
      ...defaultOptions,
      mode: 'development',
      name: 'headless-dev',

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
      name: 'headless-prod',
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

      output: {
        ...output,
        filename: 'index.production.min.js',
      },
    },
  ]
}
