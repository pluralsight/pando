import { resolve, dirname, posix } from 'node:path'
import autoprefixer from 'autoprefixer'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { getLocalPackagePath } from '../../scripts/utils.mjs'
import { fileURLToPath } from 'node:url'

const __dirname = posix.resolve(dirname(fileURLToPath(import.meta.url))) + '/'

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

const extensions = [...DEFAULT_EXTENSIONS, '.ts']

function getOutputFile(isProduction, formatType, name = 'index') {
  const fileName = isProduction ? 'production.min' : 'development'
  const folder = formats[formatType].outputDir

  return `npm/${folder}/${name}.${fileName}.js`
}

function getOutputDir(formatType) {
  const folder = formats[formatType].outputDir

  return `npm/${folder}`
}

// rollup options
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
      // Embedding CSS into JS doesn't work well with source maps, so just turn them off.
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
      // If it was in node_modules, stick it in '_vendored' (which avoids weird node_module name issues)
      const splitOnModules = id.split('node_modules/')
      if (splitOnModules.length > 1) {
        // Grab the last post-'node_modules' segment.
        return '_vendored/' + splitOnModules[splitOnModules.length - 1]
      }
    },
  }
}

function getOutputOptions(formatType, isProduction, name = 'index') {
  const format = formats[formatType]

  return {
    file: getOutputFile(isProduction, formatType, name),
    format: format.module,
    plugins: isProduction ? [terser()] : [],
    sourcemap: isProduction ? false : 'inline',
  }
}

// config

export default [
  {
    input: { index: `index.${channel}.js` },
    external: ['tslib'],
    plugins: getPlugins(),
    output: [
      getUnbundledOutputOptions('es'),
      getUnbundledOutputOptions('commonjs'),
    ],
  },
  // generated styles
  {
    input: 'src/generatedStyles.ts',
    external: ['tslib'],
    plugins: getPlugins(),

    output: [
      // dev
      getOutputOptions('es', false, 'styles'),
      getOutputOptions('commonjs', false, 'styles'),
      // prod
      getOutputOptions('es', true, 'styles'),
      getOutputOptions('commonjs', true, 'styles'),
    ],
  },
  // generate type definitions (tsc is slow)
  {
    input: 'src/index.ts',
    external: ['tslib'],
    plugins: [
      nodeResolve({
        extensions,
      }),
      typescript({
        include: ['**/*.ts'],
        exclude: ['**/*.js', '**/*.test.ts', './src/chakra.ts'],
        compilerOptions: {
          allowJs: true,
          allowSyntheticDefaultImports: true,
          baseUrl: 'src',
          declaration: true,
          declarationDir: 'npm/types',
          emitDeclarationOnly: true,
          esModuleInterop: true,
          importHelpers: true,
          isolatedModules: true,
          lib: ['es2015'],
          module: 'esnext',
          moduleResolution: 'nodenext',
          skipLibCheck: true,
          target: 'esnext',
        },
      }),
      postcss({
        onImport: () => null,
      }),
    ],
    output: {
      dir: 'npm/types',
      format: formats.es.module,
    },
  },
  // generate bundled types file
  {
    // input: './npm/types/headless-styles/src/index.d.ts',
    input: './npm/types/index.d.ts',
    plugins: [dts()],
    output: {
      file: 'npm/types/index.d.ts',
      format: formats.es.module,
    },
  },
  {
    input: './npm/types/generatedStyles.d.ts',
    plugins: [dts()],
    output: {
      file: 'npm/types/generatedStyles.d.ts',
      format: formats.es.module,
    },
  },
  {
    // input: './npm/types/headless-styles/src/types.d.ts',
    input: './npm/types/types.d.ts',
    plugins: [dts()],
    output: {
      file: 'npm/types/types.d.ts',
      format: formats.es.module,
    },
  },
]
