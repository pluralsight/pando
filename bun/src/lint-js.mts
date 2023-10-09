import { getPackageRoot, getPublicPackages } from './paths.mts'

async function lintJS() {
  const pkgs = await getPublicPackages()

  pkgs.forEach((name) => {
    Bun.spawn(['bun', 'run', 'lint:js'], {
      cwd: getPackageRoot(name),
      onExit(_, exitCode) {
        if (exitCode === 0) {
          console.log(`lint:js for ${name} passed ✅`)
        } else {
          console.error(`Failed to run lint:js for ${name}`)
        }
      },
    })
  })
}

lintJS()
