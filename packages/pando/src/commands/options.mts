import { pandoUpdate } from '../update/pandoUpdate.mts'
import { pandoSetup } from '../setup/pandoSetup.mts'
import { SETUP, UPDATE, type CLICommand } from '../shared/const.mts'

export const setup: CommandOption = {
  name: SETUP,
  describe: 'Set up a project to use Pando',
  handler: pandoSetup,
  value: SETUP,
}

export const update: CommandOption = {
  name: UPDATE,
  describe: 'Update Pando packages to the latest versions',
  handler: pandoUpdate,
  value: UPDATE,
}

// types

export interface CommandOption {
  name: CLICommand
  describe: string
  handler: () => void
  value: CLICommand
}
