import chalk from 'chalk'
import { getTestsRoot } from './paths.mts'

async function runTests() {
  Bun.spawn(['bun', 'run', 'test'], {
    cwd: getTestsRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(
          chalk.greenBright.bold(`Successfully ran tests script for tests ✅`),
        )
      } else {
        console.error(
          chalk.redBright.bold(`Failed to run test script for tests`),
        )
      }
    },
  })
}

runTests()
