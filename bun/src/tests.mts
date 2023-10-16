import { spawn } from 'bun'
import chalk from 'chalk'
import { setFailed } from '@actions/core'
import { getTestsRoot } from './paths.mts'

async function runTests() {
  spawn(['bun', 'run', 'test'], {
    cwd: getTestsRoot(),

    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(
          chalk.greenBright.bold(`Successfully ran tests script for tests ✅`),
        )
      } else {
        setFailed(
          chalk.redBright.bold(
            `Tests script for tests exited with code ${exitCode} ❌`,
          ),
        )
      }
    },
  })
}

runTests()
