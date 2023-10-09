import { getWebsiteRoot } from '../paths.mts'

async function deployWebsite() {
  Bun.spawn(['bun', 'run', 'deploy:gh'], {
    cwd: getWebsiteRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully deployed website to GH Pages ✅`)
      } else {
        console.error(`Failed to run deploy:gh for website`)
      }
    },
  })
}

deployWebsite()
