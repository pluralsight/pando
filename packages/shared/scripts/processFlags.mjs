import { join } from 'node:path'
import replace from 'replace-in-file'
import { getWorkspacePath, warning } from './utils.mjs'
import { info, error } from './theme.mjs'

async function run() {
  const channel = process.env.RELEASE_CHANNEL ?? ''
  const ghAction = process.env.GITHUB_ACTION ?? ''
  const featureFlagFile = join(getWorkspacePath(), 'utils/helpers.ts')

  warning(
    channel,
    `Processing feature flags requires a RELEASE_CHANNEL env var to be set.`
  )

  console.log(info('\n📝  Updating feature flags for channel: ' + channel))
  await updateReleaseChannel(featureFlagFile, channel)

  if (ghAction) {
    console.log(info('\n📝  Updating Netlify logic for package.'))
    await updateNetlifyVars(featureFlagFile)
  }
}

async function updateReleaseChannel(filePath, channel) {
  try {
    await replace({
      files: filePath,
      from: /process\.env\.RELEASE_CHANNEL/g,
      to: `'${channel}'`,
    })
    console.log(info('featureFlags.js contents updated with channel value.'))
  } catch (err) {
    console.log(error('Unable to update featureFlags.js with channel value.'))
    console.log(error(err))
  }
}

async function updateNetlifyVars(filePath) {
  try {
    await replace({
      files: filePath,
      from: [/process\.env\.NETLIFY/g, /process\.env\.CONTEXT/g],
      to: `'${false}'`,
    })
    console.log(info('featureFlags.js contents updated with netlify values.'))
  } catch (err) {
    console.log(error('Unable to update featureFlags.js with netlify values.'))
    console.log(error(err))
  }
}

run()
