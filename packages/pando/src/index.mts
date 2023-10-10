import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import inquirer from 'inquirer'
import { pandoSetup } from 'pandoSetup.mts'
import { pandoUpdate } from 'pandoUpdate.mts'

const usage =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

export enum CLIPaths {
  setup = 'setup',
  update = 'update',
}

export const selectArg = async () => {
  const path = await inquirer.prompt([
    {
      name: 'selectPath',
      message:
        'Welcome to the Pando CLI! An argument "setup" or "update" is required to continue. Which would you like to select?',
      type: 'list',
      choices: [
        {
          name: CLIPaths.setup,
          value: CLIPaths.setup,
        },
        {
          name: CLIPaths.update,
          value: CLIPaths.update,
        },
      ],
    },
  ])
  if (path.selectPath === CLIPaths.setup) {
    pandoSetup()
  } else if (path.selectPath === CLIPaths.update) {
    pandoUpdate()
  }
}

export const options = yargs(hideBin(process.argv))
  .usage(usage)
  .command({
    command: CLIPaths.setup,
    describe: 'Set up a project to use Pando',
    handler: pandoSetup,
  })
  .command({
    command: CLIPaths.update,
    describe: 'Update Pando packages to the most up-to-date versions',
    handler: pandoUpdate,
  })
  .demandCommand()
  .fail(selectArg)
  .help(true).argv
