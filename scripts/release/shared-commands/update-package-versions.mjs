#!/usr/bin/env node

'use strict'

import { join } from 'node:path'
import pkg from 'fs-extra'
import { getReleaseDate, getLocalPackagePath } from '../../utils.mjs'
import { info } from '../../theme.mjs'

function getPrereleaseVersion(version, date) {
  const channelLabel = getPrereleaseChannelLabel(version)
  const isExperimental = channelLabel === 'experimental'
  const defaultVersion = `${
    version.DesignVersion
  }-${channelLabel}-${getShortCommit(version.commit)}`

  if (isExperimental) {
    return `${defaultVersion}-${date}`
  }

  return defaultVersion
}

function getPrereleaseChannelLabel(version) {
  const { release } = version

  if (release === 'experimental') {
    return release
  }

  return version.nextChannelLabel
}

function getShortCommit(commit) {
  return commit.substring(0, 6)
}

async function updatePackageVersions(packageList, versionData) {
  const { readJsonSync, writeJSONSync } = pkg
  const date = await getReleaseDate()

  packageList.forEach((packageName) => {
    const packagePath = getLocalPackagePath(packageName)
    const origPackageInfo = readJsonSync(join(packagePath, 'package.json'))
    let newVersion = `${versionData.DesignVersion}`

    if (versionData.commit) {
      newVersion = getPrereleaseVersion(versionData, date)
    }

    console.log(info('\n📝  Updating version for ' + packageName))

    try {
      writeJSONSync(
        join(packagePath, 'package.json'),
        {
          ...origPackageInfo,
          version: newVersion,
        },
        {
          spaces: '\t',
        }
      )
    } catch (error) {
      throw new Error(
        `\n❌ Unable to update the version field of the ${packageName} package.json`
      )
    }
  })
}

export default updatePackageVersions
