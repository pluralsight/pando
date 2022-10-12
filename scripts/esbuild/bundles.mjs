import { resolve } from 'node:path'
import postcss from '@deanc/esbuild-plugin-postcss'
import autoprefixer from 'autoprefixer'
import alias from 'esbuild-plugin-alias'
import cssModulesPlugin from 'esbuild-css-modules-plugin'
import { getLocalPackagePath, getRootPath } from '../utils.mjs'
import { babelTargets } from '../targets.mjs'
import { replace } from './plugins/replace.mjs'
import { babel } from './plugins/babel.mjs'

function getBasePlugins(isProd) {
  return [
    alias({
      '@pluralsight/shared': resolve(
        getLocalPackagePath('shared'),
        'src/index.ts'
      ),
    }),
    babel({
      babelrc: false,
      plugins: [],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: babelTargets,
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
      root: getRootPath(),
      targets: babelTargets,
    }),
    replace({
      __EXPERIMENTAL__: JSON.stringify(EXPERIMENTAL),
      'process.env.NODE_ENV': isProd
        ? JSON.stringify('production')
        : JSON.stringify('development'),
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

export const bundles = [
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'headless-styles',
    globalName: 'HeadlessStyles',
    plugins: (isProduction) =>
      [
        ...getBasePlugins(isProduction),
        cssModulesPlugin(),
        postcss({
          plugins: [autoprefixer],
        }),
      ].filter(Boolean),
    external: ['@types/react', 'tslib'],
  },
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'react-utils',
    globalName: 'ReactUtils',
    plugins: (isProduction) => getBasePlugins(isProduction),
    external: [
      '@types/react',
      '@types/react-dom',
      'react',
      'react-dom',
      'tslib',
    ],
  },
]
