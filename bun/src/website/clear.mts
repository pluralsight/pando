import { getWebsiteRoot } from '../paths.mts'

async function clearWebsite() {
  Bun.spawn(['bun', 'run', 'clear'], {
    cwd: getWebsiteRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully cleared Website files ✅`)
      } else {
        console.error(`Failed to run clear for website`)
      }
    },
  })
}

clearWebsite()
