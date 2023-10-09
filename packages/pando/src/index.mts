import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import inquirer from 'inquirer'
import { pandoSetup } from 'pandoSetup.mts'
import { pandoUpdate } from 'pandoUpdate.mts'

const usage =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

const selectArg = async () => {
  const path = await inquirer.prompt([
    {
      name: 'selectPath',
      message:
        'Welcome to the Pando CLI! An argument "setup" or "update" is required to continue. Which would you like to select?',
      type: 'list',
      choices: [
        {
          name: 'setup',
          value: 'setup',
        },
        {
          name: 'update',
          value: 'update',
        },
      ],
    },
  ])
  if (path.selectPath === 'setup') {
    pandoSetup()
  } else if (path.selectPath === 'update') {
    pandoUpdate()
  }
}

export const options = yargs(hideBin(process.argv))
  .usage(usage)
  .command({
    command: 'setup',
    describe: 'Set up a project to use Pando',
    handler: pandoSetup,
  })
  .command({
    command: 'update',
    describe: 'Update Pando packages to the most up-to-date versions',
    handler: pandoUpdate,
  })
  .demandCommand()
  .fail(selectArg)
  .help(true).argv
