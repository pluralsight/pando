#!/usr/bin/env node

'use strict'

import {
  DesignVersion,
  experimentalPackages,
  nextChannelLabel,
  stablePackages,
} from '../../versions.mjs'
import { isPreReleaseChannel, warning } from '../utils.mjs'
import buildPackages from './build-commands/build-prerelease-packages.mjs'
import parseParams from './shared-commands/parse-params.mjs'
import updatePackageVersions from './shared-commands/update-package-versions.mjs'
import printPrereleaseSummary from './shared-commands/print-prerelease-summary.mjs'
import { info } from '../theme.mjs'

async function run() {
  const params = parseParams()
  const { ci, release } = params
  const versions = {
    DesignVersion,
    experimentalPackages,
    nextChannelLabel,
    stablePackages,
  }
  const packagesList =
    release === 'experimental'
      ? experimentalPackages
      : Object.keys(stablePackages)

  warning(
    isPreReleaseChannel(release),
    'Prepare release script is only for experimental packages. If you would like to prepare a stable release, please run prepare-release-from-npm'
  )

  console.log(info('\n👷‍♀️  Preparing ' + release + ' release...'))

  await buildPackages({ packagesList, ci, release })
  await updatePackageVersions(packagesList, {
    ...versions,
    ...params,
  })

  if (!ci) {
    printPrereleaseSummary(!isPreReleaseChannel(release))
  }
}

run()
