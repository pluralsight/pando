import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import select from '@inquirer/select'
import { pandoSetup } from './setup/pandoSetup.mts'
import { pandoUpdate } from './update/pandoUpdate.mts'
import { CLIOPERATION } from 'shared/const.mts'
import { getCliError, usage, welcome } from 'shared/prompts.mts'

export async function selectArg() {
  try {
    const path = await select({
      message: welcome,
      choices: [
        {
          name: CLIOPERATION.SETUP,
          value: CLIOPERATION.SETUP,
        },
        {
          name: CLIOPERATION.UPDATE,
          value: CLIOPERATION.UPDATE,
        },
      ],
    })

    switch (path) {
      case CLIOPERATION.UPDATE:
        pandoUpdate()
        break
      case CLIOPERATION.SETUP:
        pandoSetup()
        break
      default:
        break //this should never happen
    }
  } catch (error) {
    console.log(getCliError(CLIOPERATION.SETUP))
    console.error(error)
  }
}

// This is the actual CLI

export const pando = yargs(hideBin(process.argv))
  .usage(usage)
  .command({
    command: CLIOPERATION.SETUP,
    describe: 'Set up a project to use Pando',
    handler: pandoSetup,
  })
  .command({
    command: CLIOPERATION.UPDATE,
    describe: 'Update Pando packages to the most up-to-date versions',
    handler: pandoUpdate,
  })
  .demandCommand()
  .fail(selectArg)
  .help(true).argv
