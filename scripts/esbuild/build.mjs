import { resolve } from 'node:path'
import { build } from 'esbuild'
import { getLocalPackagePath } from '../utils.mjs'
import { info, error, success } from '../theme.mjs'
import { esbuildTargets } from '../targets.mjs'
import { bundles, EXPERIMENTAL } from './bundles.mjs'

async function buildEverything() {
  bundles.forEach((bundle) => {
    bundle.bundleTypes.forEach(async (bundleType) => {
      await createBundle(bundle, bundleType)
    })
  })
}

async function createBundle(bundle, bundleType) {
  const packageName = bundle.package
  const isProduction = bundleType.includes('_PROD')
  const platform = getPlatformType(bundleType)
  const target = await getTargetConfig(bundleType)
  const tsconfig = await getTSConfig(bundle, bundleType)
  const channel = EXPERIMENTAL ? 'experimental' : 'stable'

  console.log(info(`🚧 Creating bundle for ${packageName} \n`))

  const config = {
    entryPoints: [
      resolve(getLocalPackagePath(packageName), `index.${channel}.js`),
    ],
    bundle: true,
    globalName: bundle.globalName,
    platform,
    external: bundle.external,
    minify: isProduction,
    sourcemap: isProduction ? false : 'external',
    ...target,
    tsconfig,
    jsxDev: isProduction ? false : true,
    jsx: 'automatic',
    outfile: resolve(
      getLocalPackagePath(packageName),
      `npm/${platform}/index.${getOutputFilename(bundleType)}.js`
    ),
    plugins: bundle.plugins(isProduction),
  }

  try {
    await build(config)
    console.log(success(`✅ ${packageName} bundle successfully created \n`))
  } catch (err) {
    console.log(error(`❌ Unable to build bundle for ${packageName} \n`))
    throw new Error(err)
  }
}

function getPlatformType(typeOption) {
  return getValueFromPlatform('browser', 'node', typeOption)
}

function getTargetConfig(typeOption) {
  return getValueFromPlatform(
    {
      target: esbuildTargets,
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

  return resolve(getLocalPackagePath(bundle.package), filename) ?? ''
}

function getEnvBasedOnType(typeOption) {
  if (typeOption.includes('_DEV')) {
    return 'development'
  }

  return 'production'
}

function getOutputFilename(typeOption) {
  const type = getEnvBasedOnType(typeOption)

  switch (type) {
    case 'development':
      return type

    case 'production':
      return `${type}.min.`

    default:
      throw new Error(error('Unknown type in getOutputFilename'))
  }
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
