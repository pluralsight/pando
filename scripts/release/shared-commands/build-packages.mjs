#!/usr/bin/env node

'use strict'

import { exec } from 'child-process-promise'
import { getPackagePath } from '../../utils.mjs'
import { info, error } from '../../theme.mjs'

async function buildPackages(packageList) {
  console.log(info`\n🛠  Building public packages...`)

  try {
    await packageList.forEach(async (packageName) => {
      const cwd = getPackagePath(packageName)
      await exec('yarn build', { cwd })
    })
  } catch (err) {
    console.error(error('Unable to build all packages.'))
    throw err
  }

  console.log(info('\n✅ Successfully built all packages.'))
}

export default buildPackages
