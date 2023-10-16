import { spawnSync } from 'bun'
import chalk from 'chalk'
import { getTestsRoot } from './paths.mts'

async function runTests() {
  spawnSync(['bun', 'run', 'test'], {
    cwd: getTestsRoot(),
    stdin: 'inherit',
    stdout: 'inherit',
    stderr: 'inherit',

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
      }
    },
  })
}

runTests()
