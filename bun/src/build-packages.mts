import { getPackageRoot, getPublicPackages } from './paths.mts'

async function buildPackages() {
  const pkgs = await getPublicPackages()

  pkgs.forEach((name) => {
    console.log(`Building ${name}...`)

    Bun.spawn(['bun', 'run', 'build'], {
      cwd: getPackageRoot(name),
      onExit(_, exitCode) {
        if (exitCode === 0) {
          console.log(`Successfully built ${name}`)
        } else {
          console.error(`Failed to build ${name}`)
        }
      },
    })
  })
}

buildPackages()
