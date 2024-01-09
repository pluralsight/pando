import { getDocsRoot } from '../paths.mts'

async function deployDocs() {
  Bun.spawn(['bun', 'run', 'deploy:gh'], {
    cwd: getDocsRoot(),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully deployed docs to GH Pages ✅`)
      } else {
        console.error(`Failed to run deploy:gh for docs`)
      }
    },
  })
}

deployDocs()
