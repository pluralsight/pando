import { spawn } from 'bun'
import chalk from 'chalk'
import { getSandboxRoot } from '../paths.mts'

async function startSandbox() {
  spawn(['bun', 'run', 'generate:panda'], {
    cwd: getSandboxRoot(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(
          chalk.greenBright.bold(`Generated Panda styles for sandbox ✅`),
        )
      } else {
        console.error(
          chalk.redBright.bold(`Failed to generate Panda styles for sandbox`),
        )
      }
    },
  })
}

startSandbox()
