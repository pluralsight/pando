import { spawnSync } from 'bun'
import { exit } from 'node:process'
import chalk from 'chalk'
import { getTestsRoot } from './paths.mts'

async function runTests() {
  spawnSync(['bun', 'run', 'test'], {
    cwd: getTestsRoot(),

    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(
          chalk.greenBright.bold(`Successfully ran tests script for tests ✅`),
        )
      } else {
        console.error(
          chalk.redBright.bold(
            `Tests script for tests exited with code ${exitCode} ❌`,
          ),
        )
        exit(1)
      }
    },
  })
}

runTests()
