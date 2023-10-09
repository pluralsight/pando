import { getScriptsRoot } from '../paths.mts'

async function prepareRelease() {
  Bun.spawn(['bun', 'run', 'prepare-release'], {
    cwd: getScriptsRoot(),
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
