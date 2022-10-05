import { resolve } from 'node:path'
import esbuild from 'esbuild'
import { getLocalPackagePath } from '../utils.mjs'
import { info, error, success } from '../theme.mjs'
import { bundles } from './bundles.mjs'

async function buildEverything() {
  bundles.forEach((bundle) => {
    bundle.bundleTypes.forEach(async (bundleType) => {
      await createBundle(bundle, bundleType)
    })
  })
}

async function createBundle(bundle, bundleType) {
  const platform = getPlatformType(bundleType)
  const isProduction = bundleType.includes('_PROD')
  const target = await getTargetConfig(bundleType)
  const tsconfig = await getTSConfig(bundle, bundleType)
  const packageName = bundle.package

  console.log(info`🚧 Creating bundle for ${packageName}`)

  const config = {
    entryPoints: [resolve(getLocalPackagePath(packageName), 'src/index.ts')],
    bundle: true,
    globalName: bundle.globalName,
    platform,
    minify: isProduction,
    sourcemap: isProduction ? false : 'external',
    ...target,
    ...tsconfig,
    outdir: platform,
    outfile: `index.${getEnvBasedOnType(bundleType)}.js`,
    plugins: bundle.plugins,
  }

  try {
    esbuild.buildSync(config)
    console.log(success`✅ ${packageName} bundle successfully created.`)
  } catch (err) {
    console.log(error(`❌ Unable to build bundle for ${packageName}`))
    throw new Error(err)
  }
}

function getPlatformType(typeOption) {
  return getValueFromPlatform('browser', 'node', typeOption)
}

function getTargetConfig(typeOption) {
  return getValueFromPlatform(
    {
      target: [
        'node12',
        'esnext',
        'chrome58',
        'firefox57',
        'safari11',
        'edge16',
      ],
    },
    {},
    typeOption
  )
}

async function getTSConfig(bundle, bundleTypeOption) {
  const filename = getValueFromPlatform(
    'tsconfig.browser.json',
    'tsconfig.build.json',
    bundleTypeOption
  )

  if (bundle.ts) {
    return {
      tsconfig: resolve(getLocalPackagePath(bundle.package), filename),
    }
  }

  return {}
}

function getEnvBasedOnType(typeOption) {
  if (typeOption.includes('_DEV')) {
    return 'development'
  }

  return 'production'
}

function getValueFromPlatform(browserResult, nodeResult, typeOption) {
  if (typeOption.includes('BROWSER_')) {
    return browserResult
  } else if (typeOption.includes('NODE_')) {
    return nodeResult
  } else {
    throw new Error('Unknown typeOption passed into getValueFromPlatform.')
  }
}

buildEverything()
