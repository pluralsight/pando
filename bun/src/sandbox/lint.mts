import { spawn } from 'bun'
import chalk from 'chalk'
import { getSandboxRoot } from '../paths.mts'

async function startSandbox() {
  spawn(['bun', 'run', 'lint'], {
    cwd: getSandboxRoot(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(chalk.greenBright.bold(`Starting Pando dev sandbox ✅`))
      } else {
        console.error(chalk.redBright.bold(`Failed to start Pando dev sandbox`))
      }
    },
  })
}

startSandbox()
