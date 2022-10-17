import { resolve } from 'node:path'
import autoprefixer from 'autoprefixer'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { getLocalPackagePath } from '../../scripts/utils.mjs'

const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL

const EXPERIMENTAL =
  typeof RELEASE_CHANNEL === 'string'
    ? RELEASE_CHANNEL === 'experimental'
    : true

const channel = EXPERIMENTAL ? 'experimental' : 'stable'

const formats = {
  es: {
    outputDir: 'browser',
    module: 'es',
  },
  commonjs: {
    outputDir: 'node',
    module: 'cjs',
  },
}

function getOutputDir(kind) {
  return `npm/${kind}`
}

function getOutputFile(isProduction) {
  return isProduction ? 'production.min.js' : 'development.js'
}

// rollup options

function getPlugins(isProduction) {
  const extensions = ['.ts', '.js', '.jsx', '.es6', '.es', '.mjs']
  const nodeEnv = isProduction
    ? JSON.stringify('production')
    : JSON.stringify('development')

  return [
    nodeResolve({
      extensions,
    }),
    replace(getReplaceOptions(true)),
    alias({
      entries: {
        '@pluralsight/shared': resolve(
          getLocalPackagePath('shared'),
          'src/index.ts'
        ),
      },
    }),
    babel({
      babelrc: false,
      babelHelpers: 'bundled',
      extensions,
      include: ['src/**/*', '../shared/src/**/*'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-typescript',
      ],
    }),
    postcss({
      plugins: [autoprefixer()],
      minimize: isProduction,
      sourceMap: !isProduction,
    }),
    // sizes?
  ].filter(Boolean)
}

function getReplaceOptions(isProduction) {
  const nodeEnv = isProduction ? 'production' : 'development'

  return {
    preventAssignment: true,
    values: {
      __EXPERIMENTAL__: EXPERIMENTAL,
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
  }
}

function getOutputOptions(formatType, isProduction) {
  const format = formats[formatType]

  return {
    // dir: getOutputDir(format.outputDir),
    file: getOutputFile(isProduction),
    format: format.module,
    plugins: isProduction ? [terser()] : [],
  }
}

// config

export default {
  input: `index.${channel}.js`,
  external: ['tslib'],
  plugins: getPlugins(false),

  output: [
    // dev
    getOutputOptions('es', false),
    getOutputOptions('commonjs', false),
    // prod
    getOutputOptions('es', true),
    getOutputOptions('commonjs', true),
  ],
}
