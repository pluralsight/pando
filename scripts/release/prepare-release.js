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

  warning(
    isPreReleaseChannel(release),
    'Prepare release script is only for experimental packages. If you would like to prepare a stable release, please run prepare-release-from-npm'
  )

  console.log(info('\n👷‍♀️  Preparing ' + release + ' release...'))
  await buildPackages(experimentalPackages, params.ci)
  await updatePackageVersions(experimentalPackages, {
    ...versions,
    ...params,
  })

  if (!params.ci) {
    printPrereleaseSummary(!isPreReleaseChannel(release))
  }
}

run()
