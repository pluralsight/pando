import { spawn } from 'bun'
import chalk from 'chalk'
import { getDocsPath } from '../utils.mjs'

async function startDocs() {
  spawn(['bun', 'run', 'dev'], {
    cwd: getDocsPath(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(chalk.greenBright.bold(`Starting Pando docs ✅`))
      } else {
        console.error(chalk.redBright.bold(`Failed to start Pando docs`))
      }
    },
  })
}

startDocs()
