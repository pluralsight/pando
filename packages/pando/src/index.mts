import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import select from '@inquirer/select'
import { pandoSetup } from './pandoSetup.mts'
import { pandoUpdate } from './pandoUpdate.mts'
import { SETUP, UPDATE } from 'shared/const.mts'
import { getCliError, usage, welcome } from 'shared/prompts.mts'

export async function selectArg() {
  try {
    const path = await select({
      message: welcome,
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
    })

    switch (path) {
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
    console.log(getCliError(SETUP))
    console.error(error)
  }
}

// This is the actual CLI

export const pando = yargs(hideBin(process.argv))
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
