import { resolve } from 'node:path'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import { getLocalPackagePath } from '../utils.mjs'

const extensions = ['.ts', '.tsx', '.js', '.jsx']

function getBasePlugins(isProd) {
  return [
    // mimic dev alias setup in TS
    alias({
      entries: {
        '@pluralsight/shared': resolve(
          getLocalPackagePath('shared'),
          'src/index.ts'
        ),
      },
    }),
    // support Node paths feature (exports field) & set NODE_PATH
    nodeResolve({
      extensions,
    }),
    // compile to ES
    babel({
      babelrc: false,
      babelHelpers: 'bundled',
      extensions,
      plugins: [],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: 90,
              firefox: 78,
              edge: 91,
              safari: '12.5',
              node: 'current',
            },
          },
        ],
        [
          '@babel/preset-typescript',
          {
            allExtensions: true,
            isTSX: true,
          },
        ],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    }),
    // replace custom vars
    replace({
      preventAssignment: true,
      values: {
        __EXPERIMENTAL__: JSON.stringify(EXPERIMENTAL),
        'process.env.NODE_ENV': isProd
          ? JSON.stringify('production')
          : JSON.stringify('development'),
      },
    }),
  ].filter(Boolean)
}

// public

export const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL

export const EXPERIMENTAL =
  typeof RELEASE_CHANNEL === 'string'
    ? RELEASE_CHANNEL === 'experimental'
    : true

export const bundleTypes = {
  BROWSER_DEV: 'BROWSER_DEV',
  BROWSER_PROD: 'BROWSER_PROD',
  NODE_DEV: 'NODE_DEV',
  NODE_PROD: 'NODE_PROD',
}
const { BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD } = bundleTypes
const babelRuntime = /@babel\/runtime/

export const bundles = [
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'headless-styles',
    name: 'HeadlessStyles',
    external: [babelRuntime, '@types/react', 'tslib'],
    plugins: (isProduction) =>
      [
        ...getBasePlugins(isProduction),
        postcss({
          plugins: [autoprefixer()],
          sourceMap: !isProduction,
          minimize: isProduction,
        }),
      ].filter(Boolean),
  },
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'react-utils',
    name: 'ReactUtils',
    external: [
      babelRuntime,
      '@types/react',
      '@types/react-dom',
      'react',
      'react-dom',
      'tslib',
    ],
    plugins: (isProduction) =>
      [...getBasePlugins(isProduction)].filter(Boolean),
  },
]
