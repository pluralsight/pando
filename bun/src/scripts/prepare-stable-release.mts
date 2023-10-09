import { getScriptsRoot } from '../paths.mts'

async function prepareStableRelease() {
  Bun.spawn(['bun', 'run', 'prepare-stable-release'], {
    cwd: getScriptsRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully prepared the releases ✅`)
      } else {
        console.error(`Failed to run prepare-stable-release for packages`)
      }
    },
  })
}

prepareStableRelease()
