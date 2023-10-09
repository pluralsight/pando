import { getWebsiteRoot } from '../paths.mts'

async function startWebsite() {
  Bun.spawn(['bun', 'run', 'start'], {
    cwd: getWebsiteRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        return
      } else {
        console.error(`Failed to run start:website for Website`)
      }
    },
  })
}

startWebsite()
