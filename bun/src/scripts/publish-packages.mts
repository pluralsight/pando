import { argv, spawn } from 'bun'
import chalk from 'chalk'
import { getScriptsRoot } from '../paths.mts'

async function publishPackages() {
  console.log(chalk.blueBright(`🚧  Publishing the packages to NPM...`))

  spawn(['bun', 'run', 'publish-packages', ...argv.slice(2)], {
    cwd: getScriptsRoot(),
    stdout: 'inherit',
    onExit(_, exitCode) {
      if (exitCode === 0) {
        console.log(
          chalk.greenBright.bold(`Successfully published the packages ✅`),
        )
      } else {
        console.error(
          chalk.bgRed.white.bold(`Failed to run publish-packages for packages`),
        )
      }
    },
  })
}

publishPackages()
