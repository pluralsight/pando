import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import inquirer from 'inquirer'
import { pandoSetup } from 'pandoSetup.mts'
import { pandoUpdate } from 'pandoUpdate.mts'

const usage =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

export const SETUP = 'setup'
export const UPDATE = 'update'

export async function selectArg() {
  try {
    const path = await inquirer.prompt([
      {
        name: 'selectPath',
        message:
          'Welcome to the Pando CLI! An argument "setup" or "update" is required to continue. Which would you like to select?',
        type: 'list',
        choices: [
          {
            name: SETUP,
            value: SETUP,
          },
          {
            name: UPDATE,
            value: UPDATE,
          },
        ],
      },
    ])

    switch (path.selectPath) {
      case UPDATE:
        pandoUpdate()
        break

      case SETUP:
      default:
        pandoSetup()
        break
    }
  } catch (error) {
    console.log(
      'Sorry, something went wrong with this selection. Please try running the script again or contact the Pando Development Team.',
    )
    console.error(error)
  }
}

export const options = yargs(hideBin(process.argv))
  .usage(usage)
  .command({
    command: SETUP,
    describe: 'Set up a project to use Pando',
    handler: pandoSetup,
  })
  .command({
    command: UPDATE,
    describe: 'Update Pando packages to the most up-to-date versions',
    handler: pandoUpdate,
  })
  .demandCommand()
  .fail(selectArg)
  .help(true).argv
