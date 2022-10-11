import { resolve } from 'node:path'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import { getLocalPackagePath } from '../utils.mjs'

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
    // support Node paths feature (exports field)
    nodeResolve(),
    // compile to ES
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: ['@babel/plugin-transform-runtime'],
      presets: [
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
  ]
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
const babelRuntime = '@babel/runtime'

export const bundles = [
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'headless-styles',
    name: 'HeadlessStyles',
    external: [babelRuntime],
    plugins: (isProduction) => [
      ...getBasePlugins(isProduction),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: !isProduction,
        minimize: isProduction,
      }),
    ],
  },
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'react-utils',
    name: 'ReactUtils',
    external: [babelRuntime, 'react', 'react-dom'],
    plugins: (isProduction) => [...getBasePlugins(isProduction)],
  },
]
