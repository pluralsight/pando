import { resolve } from 'node:path'
import pkg from 'fs-extra'
import alias from 'esbuild-plugin-alias'
// import babel from 'esbuild-plugin-babel'
import cssModulesPlugin from 'esbuild-css-modules-plugin'
import { getLocalPackagePath, getRootPath } from '../utils.mjs'
import { error } from '../theme.mjs'
import { babelTargets } from '../targets.mjs'
import { replace } from './plugins/replace.mjs'
import { babel } from './plugins/babel.mjs'

async function getPeerDeps(name) {
  const { readJson } = pkg

  try {
    const packageJson = await readJson(
      resolve(getLocalPackagePath(name), 'package.json')
    )
    const peerDeps = packageJson.peerDependencies ?? {}
    return Object.keys(peerDeps)
  } catch (err) {
    console.error(error(`Unable to import peerDependencies from ${name}`))
    throw new Error(err)
  }
}

function getBasePlugins(isProd) {
  return [
    alias({
      '@pluralsight/shared': resolve(
        getLocalPackagePath('shared'),
        'src/index.ts'
      ),
    }),
    replace({
      __EXPERIMENTAL__: JSON.stringify(EXPERIMENTAL),
      'process.env.NODE_ENV': isProd
        ? JSON.stringify('production')
        : JSON.stringify('development'),
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

export const bundles = [
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'headless-styles',
    globalName: 'HeadlessStyles',
    plugins: (isProduction) => [
      ...getBasePlugins(isProduction),
      cssModulesPlugin(),
    ],
    external: ['@types/react', 'tslib'],
  },
  // {
  //   bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
  //   package: 'react-utils',
  //   globalName: 'ReactUtils',
  //   plugins: (isProduction) => [...getBasePlugins(isProduction)],
  //   external: getPeerDeps('react-utils'),
  // },
]
