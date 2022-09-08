#!/usr/bin/env node

'use strict'

import {
  DesignVersion,
  experimentalPackages,
  nextChannelLabel,
  stablePackages,
} from '../../versions.mjs'
import { isPreReleaseChannel, warning } from '../utils.mjs'
import updatePackageVersions from './publish-commands/update-package-versions.mjs'
import parseParams from './publish-commands/parse-params.mjs'
import buildPackages from './shared-commands/build-packages.mjs'
import printPrereleaseSummary from './shared-commands/print-prerelease-summary.mjs'
import { info } from '../theme.mjs'

async function run() {
  const params = parseParams()
  const { release } = params
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

  // TODO: if CI, skip buildPackages and use artifact in updatePackageVersions

  await buildPackages(packagesList, params.ci)
  await updatePackageVersions(packagesList, {
    ...versions,
    ...params,
  })

  if (!params.ci) {
    printPrereleaseSummary(!isPreReleaseChannel(release))
  }
}

run()
