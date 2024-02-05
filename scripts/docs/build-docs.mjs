import { spawn } from 'bun'
import chalk from 'chalk'
import { getDocsPath } from '../utils.mjs'

async function buildDocs() {
  spawn(['bun', 'run', 'build'], {
    cwd: getDocsPath(),
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
