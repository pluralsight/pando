import { resolve } from 'node:path'
import alias from 'esbuild-plugin-alias'
import cssModulesPlugin from 'esbuild-css-modules-plugin'
import { getLocalPackagePath } from '../utils.mjs'

export const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL

const __EXPERIMENTAL__ =
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
    ts: true,
    plugins: [
      alias({
        '@pluralsight/shared': resolve(
          getLocalPackagePath('shared'),
          'src/index.ts'
        ),
      }),
      cssModulesPlugin(),
    ],
  },
]
