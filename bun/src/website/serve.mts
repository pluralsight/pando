import { getWebsiteRoot } from '../paths.mts'

async function serveWebsite() {
  Bun.spawn(['bun', 'run', 'serve'], {
    cwd: getWebsiteRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        return
      } else {
        console.error(`Failed to run serve:website for Website`)
      }
    },
  })
}

serveWebsite()
