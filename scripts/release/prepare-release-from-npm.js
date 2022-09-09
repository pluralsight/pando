#!/usr/bin/env node

'use strict'

import { DesignVersion, stablePackages } from '../../versions.mjs'
import { isStableRelease, warning } from '../utils.mjs'
import parseParams from './shared-commands/parse-params.mjs'
import { info, error } from '../theme.mjs'
import checkoutPackages from './prepare-npm-release-commands/check-out-packages.mjs'

async function run() {
  const params = parseParams()
  const { release } = params
  const versions = {
    DesignVersion,
    stablePackages,
  }
  const packagesList = Object.keys(stablePackages)

  warning(
    isStableRelease(release),
    'Prepare release from NPM script is only for stable packages. If you would like to prepare an experimental release, please run prepare-release.'
  )

  if (!params.ci) {
    console.error(error('Prepare from NPM should only be run in the CI'))
    process.exit(1)
  }

  console.log(info('\n👷‍♀️  Preparing ' + release + ' release...'))

  await checkoutPackages(packagesList, { ...versions, ...params })
  // await updatePackageVersions(packagesList, {
  //   ...versions,
  //   ...params,
  // })
}

run()
