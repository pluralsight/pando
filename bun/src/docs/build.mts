import { spawn } from 'bun'
import chalk from 'chalk'
import { getDocsRoot } from '../paths.mts'

async function buildDocs() {
  spawn(['bun', 'run', 'build'], {
    cwd: getDocsRoot(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(chalk.greenBright.bold(`Successfully built docs ✅`))
      } else {
        console.error(chalk.redBright.bold(`Failed to build docs`))
      }
    },
  })
}

buildDocs()
