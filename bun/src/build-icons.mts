import { getPackageRoot } from './paths.mts'

async function buildIcons() {
  console.log(`Building icons...`)

  Bun.spawn(['bun', 'run', 'build'], {
    cwd: getPackageRoot('icons'),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`Successfully built icons`)
      } else {
        console.error(`Failed to build icons`)
      }
    },
  })
}

buildIcons()
