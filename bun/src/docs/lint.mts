import { spawn } from 'bun'
import chalk from 'chalk'
import { getDocsRoot } from '../paths.mts'

async function lintDocs() {
  spawn(['bun', 'run', 'lint'], {
    cwd: getDocsRoot(),
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
