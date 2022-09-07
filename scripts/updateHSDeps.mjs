import { join } from 'node:path'
import fsExtra from 'fs-extra'
import { getPackagePath, warning } from './utils.mjs'
import { info, error } from './theme.mjs'

process.env.RELEASE_CHANNEL = 'next'

async function run() {
  const channel = process.env.RELEASE_CHANNEL ?? ''
  const headlessPath = getPackagePath('headless-styles')
  const packageJsonPath = join(headlessPath, 'package.json')

  warning(
    channel,
    `Updating Headless-styles deps requires a RELEASE_CHANNEL env var to be set.`
  )

  const packageJson = fsExtra.readJsonSync(packageJsonPath)
  console.log(
    info('\n📝  Updating shared package version for channel: ' + channel)
  )

  try {
    fsExtra.writeJSONSync(
      packageJsonPath,
      {
        ...packageJson,
        dependencies: {
          ...packageJson.dependencies,
          '@pluralsight/shared': channel,
        },
      },
      {
        spaces: '\t',
      }
    )
    console.log(
      info(
        '\n✅  Update complete for dependency @pluralsight/shared@' + channel
      )
    )
  } catch (err) {
    console.log(error('Unable to update headless-styles package.json.'))
    throw err
  }
}

run()
