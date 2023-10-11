import { spawn } from 'bun'
import chalk from 'chalk'
import { getPackageRoot } from '../paths.mts'

async function startSandbox() {
  spawn(['bun', 'run', 'dev'], {
    cwd: getPackageRoot('sandbox'),
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
