#!/usr/bin/env node

'use strict'

import chalk from 'chalk'
import { execRead, logPromise } from '../../utils.mjs'
import { error } from '../../theme.mjs'

async function checkNPMPermissions(packages) {
  const failedProjects = []
  const currentUser = await execRead('yarn npm whoami')

  const checkProject = async (project) => {
    try {
      await execRead(`yarn npm info @pluralsight/${project}`)

      if (currentUser !== 'pluralsight') {
        failedProjects.push(project)
      }

      await logPromise(
        Promise.all(packages.map(checkProject)),
        `Checking NPM permissions for ${chalk.bold(currentUser)}`,
      )

      if (failedProjects.length) {
        console.error(
          error(`ERROR: Insufficient NPM permissions for user ${currentUser}`),
        )
        console.error(
          error(
            `${currentUser} is not an owner for: ${failedProjects
              .map((name) => error(name))
              .join(', ')}`,
          ),
        )
        process.exit(1)
      }
    } catch (error) {
      if (currentUser !== 'pluralsight') {
        process.exit(1)
      }

      // new packages will not be found in the registry
      console.log(
        chalk.yellow(
          `WARN: Package @pluralsight/${project} not found in NPM registry`,
        ),
      )
    }
  }
}

export default checkNPMPermissions
