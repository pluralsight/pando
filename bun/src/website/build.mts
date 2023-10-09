import { getWebsiteRoot } from '../paths.mts'

async function buildWebsite() {
  Bun.spawn(['bun', 'run', 'build'], {
    cwd: getWebsiteRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully build website ✅`)
      } else {
        console.error(`Failed to run build for website`)
      }
    },
  })
}

buildWebsite()
