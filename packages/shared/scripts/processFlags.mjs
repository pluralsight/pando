import { join } from 'node:path'
import replace from 'replace-in-file'
import { getWorkspacePath, warning } from './utils.mjs'
import { info, error } from './theme.mjs'

process.env.RELEASE_CHANNEL = 'experimental'

async function run() {
  const channel = process.env.RELEASE_CHANNEL ?? ''

  warning(
    channel,
    `Processing feature flags requires a RELEASE_CHANNEL env var to be set.`
  )

  const featureFlagFile = join(getWorkspacePath(), 'src/featureFlags.js')

  console.log(info('\n📝  Updating feature flags for channel: ' + channel))

  try {
    await replace({
      files: featureFlagFile,
      from: /process\.env\.RELEASE_CHANNEL/g,
      to: `'${channel}'`,
    })
    console.log(info('Feature flag file contents updated.'))
  } catch (err) {
    console.log(error('Unable to update featureFlags.js with channel value.'))
    console.log(error(err))
  }
}

run()
