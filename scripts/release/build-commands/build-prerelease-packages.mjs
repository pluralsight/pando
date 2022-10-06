#!/usr/bin/env node

'use strict'

import { exec } from 'child-process-promise'
import { getArtifactPackagePath, getLocalPackagePath } from '../../utils.mjs'
import { info, error } from '../../theme.mjs'

async function buildPackages(options) {
  const { packagesList } = options

  if (options.ci) {
    console.log(
      info`\n🛠  Copying package build artifacts to local workspaces...`
    )

    await packagesList.forEach(async (packageName) => {
      const artifactPath = getArtifactPackagePath(packageName, options.release)
      const localPath = getLocalPackagePath(packageName)

      console.log(info(`Copying ${artifactPath} to ${localPath}...`))
      await exec(`cp -r ${artifactPath} ${localPath}`)
    })

    return
  }

  console.log(info`\n🛠  Building public packages locally...`)

  try {
    await packagesList.forEach(async (packageName) => {
      const cwd = getLocalPackagePath(packageName)
      await exec('yarn create:packages', { cwd })
    })
  } catch (err) {
    console.error(error('Unable to build all packages.'))
    throw err
  }

  console.log(info('\n✅ Successfully built all packages.'))
}

export default buildPackages
