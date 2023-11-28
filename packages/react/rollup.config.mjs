import { resolve } from 'node:path'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import { nodeExternals } from 'rollup-plugin-node-externals'

export const formats = {
  es: {
    outputDir: 'browser',
    module: 'es',
    selector: 'es',
  },
  commonjs: {
    outputDir: 'node',
    module: 'cjs',
    selector: 'commonjs',
  },
}

export function getOutputDir(formatType) {
  const folder = formats[formatType].outputDir
  return `npm/${folder}`
}

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']

function getPlugins() {
  return [
    nodeExternals(),
    nodeResolve({
      extensions,
    }),
    replace(getReplaceOptions(true)),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions,
    }),
    cleanup({
      comments: 'jsdoc',
      extensions,
      sourcemap: true,
    }),
  ].filter(Boolean)
}

function getReplaceOptions(isProduction) {
  const nodeEnv = isProduction ? 'production' : 'development'

  return {
    preventAssignment: true,
    values: {
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
  }
}

function getUnbundledOutputOptions(formatType) {
  const format = formats[formatType]

  return {
    dir: getOutputDir(formatType),
    generatedCode: 'es2015',
    format: format.module,
    sourcemap: true,
    preserveModules: false,
  }
}

export default [
  {
    input: { index: resolve('src/index.ts') },
    plugins: getPlugins(),
    output: [
      getUnbundledOutputOptions(formats.es.selector),
      getUnbundledOutputOptions(formats.commonjs.selector),
    ],
  },
]
