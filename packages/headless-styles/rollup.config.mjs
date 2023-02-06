import { resolve, dirname, posix } from 'node:path'
import { fileURLToPath } from 'node:url'
import autoprefixer from 'autoprefixer'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import { getLocalPackagePath } from '../../scripts/utils.mjs'
import {
  EXPERIMENTAL,
  channel,
  formats,
  getOutputDir,
} from '../shared/src/rollup/helpers.mjs'

const __dirname = posix.resolve(dirname(fileURLToPath(import.meta.url))) + '/'
const extensions = [...DEFAULT_EXTENSIONS, '.ts']

function getPlugins() {
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
      minimize: true,
      sourceMap: false,
    }),
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

function getUnbundledOutputOptions(formatType) {
  const format = formats[formatType]

  return {
    dir: getOutputDir(formatType),
    generatedCode: 'es2015',
    format: format.module,
    sourcemap: true,
    hoistTransitiveImports: false,
    // Make sure to split out all the modules so that they are tree-shakeable
    manualChunks(id) {
      if (id.startsWith(__dirname)) {
        return id.substring(__dirname.length)
      }
      // If it was in node_modules, stick it in '_vendored'
      // (which avoids weird node_module name issues)
      const splitOnModules = id.split('node_modules/')
      if (splitOnModules.length > 1) {
        // Grab the last post-'node_modules' segment.
        return '_vendored/' + splitOnModules[splitOnModules.length - 1]
      }
    },
  }
}

export default [
  {
    input: { index: `index.${channel}.js` },
    external: ['tslib'],
    plugins: getPlugins(),
    output: [
      getUnbundledOutputOptions(formats.es.selector),
      getUnbundledOutputOptions(formats.commonjs.selector),
    ],
  },
  // generated styles
  {
    input: 'src/styles.ts',
    external: ['tslib'],
    plugins: getPlugins(),

    output: [
      getUnbundledOutputOptions(formats.es.selector),
      getUnbundledOutputOptions(formats.commonjs.selector),
    ],
  },
]
