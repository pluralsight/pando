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
        pandoSetup()
        break
      default:
        break //this should never happen
    }
  } catch (error) {
    console.log(
      'Oh no! There was a problem running the XXXX command. Please report this error to the  Pando Team by submitting an issue on Github: https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&projects=&template=bug.yml&title=%5BBug%3F%5D%3A+.',
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
