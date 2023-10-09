import { getPackageRoot, getPublicPackages } from './paths.mts'

async function lintTS() {
  const pkgs = (await getPublicPackages()).filter((name) => {
    // Skip packages that don't have TypeScript
    return name !== 'icons'
  })

  pkgs.forEach((name) => {
    Bun.spawn(['bun', 'run', 'lint:ts'], {
      cwd: getPackageRoot(name),
      onExit(_, exitCode) {
        if (exitCode === 0) {
          console.log(`lint:ts for ${name} passed ✅`)
        } else {
          console.error(`Failed to run lint:ts for ${name}`)
        }
      },
    })
  })
}

lintTS()
