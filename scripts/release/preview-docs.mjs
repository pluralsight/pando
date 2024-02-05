import { spawn } from 'bun'
import chalk from 'chalk'
import { getDocsPath } from '../utils.mjs'

async function previewDocs() {
  spawn(['bun', 'run', 'preview'], {
    cwd: getDocsPath(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(chalk.greenBright.bold(`Previewing docs ✅`))
      } else {
        console.error(chalk.redBright.bold(`Failed to preview docs`))
      }
    },
  })
}

previewDocs()
