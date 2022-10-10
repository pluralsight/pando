import { resolve } from 'node:path'
import { readJSONSync } from 'fs-extra'
import alias from 'esbuild-plugin-alias'
import babel from 'esbuild-plugin-babel'
import cssModulesPlugin from 'esbuild-css-modules-plugin'
import babelConfig from '../../babel.config.js'
import { getLocalPackagePath } from '../utils.mjs'

const { BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD } = bundleTypes

const sharedAliasPlugin = alias({
  '@pluralsight/shared': resolve(getLocalPackagePath('shared'), 'src/index.ts'),
})

const babelPlugin = babel({
  config: babelConfig,
})

function getPeerDeps(name) {
  const packageJson = readJSONSync(
    resolve(getLocalPackagePath(name), 'package.json')
  )
  const peerDeps = packageJson.peerDependencies ?? {}

  return Object.keys(peerDeps)
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

export const bundles = [
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'headless-styles',
    globalName: 'HeadlessStyles',
    ts: true,
    plugins: [sharedAliasPlugin, babelPlugin, cssModulesPlugin()],
  },
  {
    bundleTypes: [BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD],
    package: 'react-utils',
    globalName: 'ReactUtils',
    ts: true,
    plugins: [sharedAliasPlugin, babelPlugin, cssModulesPlugin()],
    external: getPeerDeps('react-utils'),
  },
]
