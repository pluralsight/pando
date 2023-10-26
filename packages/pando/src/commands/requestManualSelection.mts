import select from '@inquirer/select'
import { pandoUpdate } from '../update/pandoUpdate.mts'
import { pandoSetup } from '../setup/pandoSetup.mts'
import { welcome } from '../shared/prompts.mts'
import { getCLICommandError } from '../shared/errors.mts'
import { CLICommand } from '../shared/const.mts'
import { setup, update } from './options.mts'

export async function requestManualSelection() {
  try {
    const userSelection = await select({
      message: welcome,
      choices: [
        {
          name: setup.name,
          value: setup.value,
        },
        {
          name: update.name,
          value: update.value,
        },
      ],
    })

    switch (userSelection) {
      case update.name:
        pandoUpdate()
        break
      case setup.name:
        pandoSetup()
        break
      default:
        break //this should never happen
    }
  } catch (error) {
    // TODO: Figure out how to make error return the correct option
    console.log(getCLICommandError(setup.name as CLICommand))
    console.error(error)
  }
}
