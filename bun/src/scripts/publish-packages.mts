import { getScriptsRoot } from '../paths.mts'

async function publishPackages() {
  Bun.spawn(['bun', 'run', 'publish-packages'], {
    cwd: getScriptsRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully published the packages ✅`)
      } else {
        console.error(`Failed to run publish-packages for packages`)
      }
    },
  })
}

publishPackages()
