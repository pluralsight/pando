import { spawn } from 'bun'
import chalk from 'chalk'
import { getTestsRoot } from './paths.mts'

async function runTests() {
  spawn(['bun', 'run', 'test'], {
    cwd: getTestsRoot(),
    stderr: 'inherit',

    ipc(message, subprocess) {
      if (message.type === 'error') {
        console.error(chalk.redBright.bold(message.error))
        subprocess.kill(1)
      }
    },

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
