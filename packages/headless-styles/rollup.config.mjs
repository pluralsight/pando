import { resolve } from 'node:path'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import { getLocalPackagePath } from '../../scripts/utils.mjs'

const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL

const EXPERIMENTAL =
  typeof RELEASE_CHANNEL === 'string'
    ? RELEASE_CHANNEL === 'experimental'
    : true

const channel = EXPERIMENTAL ? 'experimental' : 'stable'

const formats = {
  es: 'es',
  commonjs: 'cjs',
}

function getOutputDir(kind) {
  return `npm/${kind}`
}

function getOutputFile(isProduction) {
  return isProduction ? 'production.min.js' : 'development.js'
}

// rollup options

const entry = `./index.${channel}.ts`
const external = ['tslib']

async function getBrowserDefaultOptions(isProduction) {
  return {
    input: entry,
    external,

    plugins: getPlugins(isProduction),

    output: {
      dir: getOutputDir('browser'),
      file: getOutputFile(isProduction),
      format: formats.es,
      plugins: [
        isProduction && (await import('rollup-plugin-terser')).terser(),
      ],
    },
  }
}

async function getNodeDefaultOptions(isProduction) {
  return {
    input: entry,
    external,

    plugins: getPlugins(isProduction),

    output: {
      dir: getOutputDir('node'),
      file: getOutputFile(isProduction),
      format: formats.commonjs,
      plugins: [
        isProduction && (await import('rollup-plugin-terser')).terser(),
      ],
    },
  }
}

function getPlugins(isProduction) {
  const include = 'src/**/*'
  const exclude = ['npm', 'sandbox', 'tests']
  const nodeEnv = isProduction
    ? JSON.stringify('production')
    : JSON.stringify('development')

  return [
    alias({
      entries: {
        '@pluralsight/shared': resolve(
          getLocalPackagePath('shared'),
          'src/index.ts'
        ),
      },
    }),
    // commonjs
    babel({
      babelrc: false,
      include,
      exclude,
      extensions: ['.ts', '.js', '.jsx', '.es6', '.es', '.mjs'],
      babelHelpers: 'bundled',
    }),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
        __EXPERIMENTAL__: EXPERIMENTAL,
      },
    }),
    // sizes?
  ].filter(Boolean)
}

// config

export default (async () => {
  const browserDefaultDevOptions = await getBrowserDefaultOptions(false)
  const browserDefaultProdOptions = await getBrowserDefaultOptions(true)
  const nodeDefaultDevOptions = await getNodeDefaultOptions(false)
  const nodeDefaultProdOptions = await getNodeDefaultOptions(true)

  return [
    {
      ...browserDefaultDevOptions,
    },
    {
      ...browserDefaultProdOptions,
    },
    {
      ...nodeDefaultDevOptions,
    },
    {
      ...nodeDefaultProdOptions,
    },
  ]
})()
