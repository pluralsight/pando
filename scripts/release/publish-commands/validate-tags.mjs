#!/usr/bin/env node

'use strict'

import { join } from 'node:path'
import pkg from 'fs-extra'
import { warning, getLocalPackagePath } from '../../utils.mjs'
import { error, info } from '../../theme.mjs'

function tagError(message) {
  return error(errorMessage(message))
}

function errorMessage({ release, version, badTag }) {
  return (
    'error: ' +
    release +
    ' {version: ' +
    version +
    '} cannot be tagged as ' +
    badTag
  )
}

async function validateTags(options) {
  const { packages, tags } = options

  console.log(info(`Tags: ${[...tags]}`))
  // Prevent a "next" release from ever being published as @latest
  // All canaries share a version number, so it's okay to check any of them.
  const arbitraryPackageName = packages[0]
  const packagePath = getLocalPackagePath(arbitraryPackageName)
  const { version } = await pkg.readJsonSync(join(packagePath, 'package.json'))
  const isExperimentalVersion = version.includes('experimental')
  const isPrerelease = version.includes('-')

  console.log(info('\n🕵️‍♂️ Validating package version from ' + packagePath))

  if (isPrerelease) {
    if (tags.includes('latest')) {
      warning(
        !isExperimentalVersion,
        tagError({
          badTag: 'latest',
          version,
          release: 'Experimental',
        }),
      )
      warning(
        isExperimentalVersion,
        tagError({
          badTag: 'latest',
          version,
          release: 'next',
        }),
      )
    }

    warning(
      !(tags.includes('next') && isExperimentalVersion),
      tagError({
        badTag: 'experimental',
        version,
        release: 'next',
      }),
    )
    warning(
      !(tags.includes('experimental') && !isExperimentalVersion),
      tagError({
        badTag: 'next',
        version,
        release: 'experimental',
      }),
    )
  } else {
    warning(
      tags.includes('latest'),
      tagError({
        badTag: 'experimental',
        version,
        release: 'latest',
      }),
    )
  }
}

export default validateTags
