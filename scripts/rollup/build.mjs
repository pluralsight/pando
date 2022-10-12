import { join, resolve } from 'node:path'
import { rollup } from 'rollup'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { getLocalPackagePath } from '../utils.mjs'
import { info, error, success } from '../theme.mjs'
import { bundles, bundleTypes, EXPERIMENTAL } from './bundles.mjs'

async function buildEverything() {
  let bundleList = []
  const { BROWSER_DEV, BROWSER_PROD, NODE_DEV, NODE_PROD } = bundleTypes

  for (const bundle of bundles) {
    bundleList.push(
      [bundle, BROWSER_DEV],
      [bundle, BROWSER_PROD],
      [bundle, NODE_DEV],
      [bundle, NODE_PROD]
    )
  }

  for (const [bundle, bundleType] of bundleList) {
    await createBundle(bundle, bundleType)
  }
}

async function createBundle(bundle, bundleType) {
  const channel = EXPERIMENTAL ? 'experimental' : 'stable'
  const packageName = bundle.package
  const externals = bundle.external
  const isProduction = bundleType.includes('_PROD')
  const format = getFormatType(bundleType)
  const localPackage = getLocalPackagePath(packageName)
  let bundleResult = null
  let buildFailed = false
  const tsconfig = resolve(localPackage, 'tsconfig.build.json')

  const config = {
    inputOptions: {
      input: resolve(localPackage, `index.${channel}.js`),
      external: externals,
      onwarn: handleRollupWarning,
      plugins: [
        commonjs(),
        typescript({
          filterRoot: localPackage,
          noEmitOnError: true,
          tsconfig,
        }),
        ...bundle.plugins(isProduction),
      ],
    },
    output: {
      name: bundle.name,
      externalLiveBindings: false,
      file: resolve(
        localPackage,
        `npm/${format}/index.${getOutputFilename(bundleType)}.js`
      ),
      format,
      sourcemap: !isProduction,
      plugins: [
        // compile to ES from the generated code to remove Rollup wrappers
        // and update to lower compatibility target
        getBabelOutputPlugin({
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
          ],
        }),
        isProduction && terser(),
      ],
    },
  }

  console.log(info(`🚧 Creating bundle for ${packageName} ${bundleType} \n`))

  try {
    bundleResult = await rollup(config.inputOptions)
    await bundleResult.write(config.output)
  } catch (err) {
    buildFailed = true
    console.log(error(`❌ Unable to build bundle for ${packageName} \n`))
    throw new Error(err)
  }

  if (bundleResult) {
    console.log(success(`✅ ${packageName} bundle successfully created \n`))
    await bundleResult.close()
  }

  process.exit(buildFailed ? 1 : 0)
}

function getFormatType(typeOption) {
  return getValueFromPlatform('es', 'cjs', typeOption)
}

// function getTargetConfig(typeOption) {
//   return getValueFromPlatform(
//     {
//       target: [
//         'node16',
//         'esnext',
//         'chrome58',
//         'firefox57',
//         'safari11',
//         'edge18',
//       ],
//     },
//     {},
//     typeOption
//   )
// }

async function getTSConfig(bundle, bundleTypeOption) {
  const filename = getValueFromPlatform(
    'tsconfig.browser.json',
    'tsconfig.build.json',
    bundleTypeOption
  )

  return join(getLocalPackagePath(bundle.package), filename)
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

function handleRollupWarning(warning) {
  if (warning.code === 'UNUSED_EXTERNAL_IMPORT') {
    const match = warning.message.match(/external module '([^']+)'/)
    if (!match || typeof match[1] !== 'string') {
      throw new Error('Could not parse a Rollup warning. ' + 'Fix this method.')
    }
  }

  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    // Ignored
  } else if (typeof warning.code === 'string') {
    // This is a warning coming from Rollup itself.
    // These tend to be important (e.g. clashes in namespaced exports)
    // so we'll fail the build on any of them.
    console.error()
    console.error(warning.message || warning)
    console.error()
    process.exit(1)
  } else {
    // The warning is from one of the plugins.
    // Maybe it's not important, so just print it.
    console.warn(warning.message || warning)
  }
}

buildEverything()
