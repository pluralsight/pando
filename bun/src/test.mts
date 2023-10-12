import { getPackageRoot, getPublicPackages } from './paths.mts'

async function test() {
  const pkgs = await getPublicPackages()

  pkgs.forEach((name) => {
    Bun.spawn(['bun', 'run', 'test'], {
      cwd: getPackageRoot(name),
      onExit(_, exitCode) {
        if (exitCode === 0) {
          console.log(`test for ${name} completed ✅`)
        } else {
          console.error(`Failed to run test for ${name}`)
        }
      },
    })
  })
}

test()
