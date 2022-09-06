import { join } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import replace from 'replace-in-file'
import { getPackagePath, warning } from './utils.mjs'
import { info, error } from './theme.mjs'

process.env.RELEASE_CHANNEL = 'experimental'

async function run() {
  const channel = process.env.RELEASE_CHANNEL ?? ''

  warning(
    channel,
    `Processing feature flags requires a RELEASE_CHANNEL env var to be set.`
  )

  console.log(info('\n📝  Updating feature flags for channel: ' + channel))

  const featureFlagFile = join(getPackagePath('shared'), 'src/featureFlags.js')

  try {
    const result = await replace({
      files: featureFlagFile,
      from: /process.env.RELEASE_CHANNEL/g,
      to: channel.toString(),
    })
    console.log(info('Feature flag file contents updated.'), result)
  } catch (err) {
    console.log(error(err))
  }
  // const fileData = readFileSync(featureFlagFile, {
  //   encoding: 'ucs-2',
  // })

  // if (!fileData) {
  //   console.log(error('Unable to process feature flag file.'))
  // }

  // const updatedFileContent = fileData.replace(
  //   /process.env.RELEASE_CHANNEL/g,
  //   channel
  // )

  // console.log(updatedFileContent)

  // try {
  //   writeFileSync(featureFlagFile, updatedFileContent, 'ucs-2')
  // } catch (err) {
  //   console.log(error('Unable to write channel to feature flag file.'))
  //   throw err
  // }
}

run()

// flags.forEach((featureFlagPath) => {
//   readFileSync(featureFlagPath, (err, data) => {
//     if (err) {
//       throw err
//     }

//     const channel = data.replace(
//       /process.env.RELEASE_CHANNEL/g,
//       RELEASE_CHANNEL
//     )

//     writeFileSync(featureFlagPath, channel, 'utf8', function (writeErr) {
//       if (writeErr) {
//         throw err
//       }

//       console.log('working')
//     })
//   })
// })
