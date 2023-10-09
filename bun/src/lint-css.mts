import { getPackageRoot } from './paths.mts'

async function lintCSS() {
  Bun.spawn(['bun', 'run', 'lint:js'], {
    cwd: getPackageRoot('headless-styles'),
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(`lint:css for headless-styles passed ✅`)
      } else {
        console.error(`Failed to run lint:css for headless-styles`)
      }
    },
  })
}

lintCSS()
