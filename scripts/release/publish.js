#!/usr/bin/env node

'use strict'

import {
  experimentalPackages,
  stablePackages,
  DesignVersion,
} from '../../versions.mjs'
import { error, info } from '../theme.mjs'
import parseParams from './publish-commands/parse-publish-params.mjs'
import validateTags from './publish-commands/validate-tags.mjs'
import confirmSkippedPackages from './publish-commands/confirm-skipped-packages.mjs'
import confirmVersionAndTags from './publish-commands/confirm-version-and-tags.mjs'
import validateSkipPackages from './publish-commands/validate-skip-packages.mjs'
import checkNPMPermissions from './publish-commands/check-npm-permissions.mjs'
import publishToNPM from './publish-commands/publish-to-npm.mjs'
import printFollowUpInstructions from './publish-commands/print-follow-up-instructions.mjs'

function isExperimentalWithNoPackages() {
  return (
    process.env.RELEASE_CHANNEL === 'experimental' &&
    !experimentalPackages.length
  )
}

async function run() {
  const params = parseParams()
  const packages = [...experimentalPackages, ...Object.keys(stablePackages)]

  if (isExperimentalWithNoPackages()) {
    console.log(info('\nSkipping experimental publishing...'))
    process.exit(0)
  }

  // Pre-filter any skipped packages to simplify the following commands.
  // As part of doing this we can also validate that none of the skipped
  // packages were misspelled.
  params.skipPackages.forEach((packageName) => {
    const index = packages.indexOf(packageName)
    if (index < 0) {
      console.log(
        error('Invalid skip package {package ' + packageName + ' } specified.')
      )
      process.exit(1)
    } else {
      packages.splice(index, 1)
    }
  })

  // Validate everything

  const paramsAndPackages = { ...params, packages }
  await validateTags(paramsAndPackages)

  if (!params.ci) {
    await confirmSkippedPackages(params)
  }

  await confirmVersionAndTags(paramsAndPackages)
  await validateSkipPackages(paramsAndPackages)
  await checkNPMPermissions(packages)

  // Publish

  if (params.ci) {
    let failed = false
    packages.forEach(async (packageName) => {
      try {
        await publishToNPM(params, packageName, null)
      } catch (err) {
        failed = true
        console.log(
          error`Publish failed. Will attempt to publish remaining packages.`
        )
        console.error(error(err))
      }
    })

    if (failed) {
      console.log(error`One or more packages failed to publish.`)
      process.exit(1)
    }
  } else {
    console.clear()

    packages.forEach(async (packageName) => {
      try {
        await publishToNPM(params, packageName)
      } catch (errorData) {
        console.error(errorData.message)
        console.log()
        console.log(error`Publish failed.`)
      }
    })

    await printFollowUpInstructions({ ...params, version: DesignVersion })
  }
}

run()
