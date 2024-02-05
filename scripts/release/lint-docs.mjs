import { spawn } from 'bun'
import chalk from 'chalk'
import { getDocsPath } from '../utils.mjs'

async function lintDocs() {
  spawn(['bun', 'run', 'lint'], {
    cwd: getDocsPath(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(chalk.greenBright.bold(`Linting Pando docs ✅`))
      } else {
        console.error(chalk.redBright.bold(`Failed to lint Pando docs`))
      }
    },
  })
}

lintDocs()
