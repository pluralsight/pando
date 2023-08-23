import { join } from 'node:path'
import { exec } from 'child-process-promise'
import pkg from 'fs-extra'
import chalk from 'chalk'
import { error, success } from '../../theme.mjs'
import { confirm, getLocalPackagePath } from '../../utils.mjs'

async function addDistTags({ dry, tags, version }, packageName, packagePath) {
  if (dry) {
    return
  }

  tags.forEach(async (tagName) => {
    await exec(
      `npm tag add @pluralsight/${packageName}@${version} ${tagName}`,
      {
        cwd: packagePath,
      },
    )
  })
}

async function addUntaggedTags({ dry, tags }, packageName) {
  if (!tags.includes('untagged') || dry) {
    return
  }
  // npm doesn't let us publish without a tag at all,
  // so for one-off publishes we clean it up ourselves.
  // await exec(`npm dist-tag rm ${packageName} untagged`)
  await exec(`npm tag remove @pluralsight/${packageName} untagged`)
}

async function publishToNPM({ dry, tags, ci }, packageName) {
  const { readJsonSync } = pkg
  const packagePath = getLocalPackagePath(packageName)
  const { version } = readJsonSync(join(packagePath, 'package.json'))

  try {
    // Check if this package version has already been published.
    // If so we might be resuming from a previous run.
    // We could infer this by comparing the build-info.json,
    // But for now the easiest way is just to ask if this is expected.
    const info = await exec(`npm view @pluralsight/${packageName}@${version}`)

    if (info) {
      console.log(
        error(
          'error: package ' +
            packageName +
            '@' +
            version +
            ' has already been published.',
        ),
      )

      if (!ci) {
        await confirm('Is this expected?')
      }
    }
  } catch (err) {
    // If the package doesn't exist, we're good to go.
    try {
      await exec(`pnpm publish --tag=${tags[0]} --tolerate-republish`, {
        cwd: packagePath,
      })
      console.log(
        success(`\n✅ Successfully Published ${chalk.bold(packageName)}`),
      )
    } catch (err) {
      console.error(
        error(`Npm publish failed to ship ${chalk.bold(packageName)}`),
      )
      console.error(err)
    }

    console.log('Adding tags to npm')

    try {
      await addDistTags({ dry, tags, version }, packageName, packagePath)
      await addUntaggedTags({ dry, tags }, packageName)
    } catch (err) {
      console.error(error(`Unable to add tags for ${packageName}`))
      console.error(err)
    }
  }
}

export default publishToNPM
