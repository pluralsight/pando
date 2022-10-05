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
    globalName: 'Headless-styles',
    ts: true,
  },
]
