import { resolve } from 'node:path'
import { getLocalPackagePath } from '../utils.mjs'
import { bundles, bundleTypes } from './bundles.mjs'

async function buildEverything() {
  bundles.forEach((bundle) => {
    bundle.bundleTypes.forEach(async (bundleType) => {
      await createBundle(bundle, bundleType)
    })
  })
}

async function createBundle(bundle, bundleType) {
  const tsconfig = await getTSConfig(bundle, bundleType)

  const config = {
    entryPoints: [resolve(getLocalPackagePath(bundle.package), 'src/index.ts')],
    bundle: true,
    platform: getPlatformType(bundleType),
    globalName: bundle.globalName,
    ...tsconfig,
  }

  console.log(config)
}

async function getTSConfig(bundle, bundleTypeOption) {
  const filename = getTSFile(bundleTypeOption)

  if (bundle.ts) {
    return {
      tsconfig: resolve(getLocalPackagePath(bundle.package), filename),
    }
  }

  return {}
}

function getTSFile(typeOption) {
  switch (typeOption) {
    case bundleTypes.BROWSER_DEV:
    case bundleTypes.BROWSER_PROD:
      return 'tsconfig.browser.json'

    case bundleTypes.NODE_DEV:
    case bundleTypes.NODE_PROD:
      return 'tsconfig.build.json'

    default:
      throw new Error('Unknown bundleType option passed to getTSFile function.')
  }
}

function getPlatformType(typeOption) {
  switch (typeOption) {
    case bundleTypes.BROWSER_DEV:
    case bundleTypes.BROWSER_PROD:
      return 'browser'

    case bundleTypes.NODE_DEV:
    case bundleTypes.NODE_PROD:
      return 'node'

    default:
      throw new Error('Unknown bundleType option passed to getTSFile function.')
  }
}

buildEverything()
