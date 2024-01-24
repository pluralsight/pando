import { argv, spawn } from 'bun'
import { getScriptsRoot } from '../paths.mts'

async function prepareRelease() {
  console.log(`🚧  Preparing the releases...`)

  spawn(['bun', 'run', 'prepare-release', ...argv.slice(2)], {
    cwd: getScriptsRoot(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully prepared the releases ✅`)
      } else {
        console.error(`Failed to run prepare-release for packages`)
      }
    },
  })
}

prepareRelease()
