import { pandoUpdate } from 'update/pandoUpdate.mts'
import { pandoSetup } from '../setup/pandoSetup.mts'
import { SETUP, UPDATE } from '../shared/const.mts'

export const setup = {
  name: SETUP,
  describe: 'Set up a project to use Pando',
  handler: pandoSetup,
  value: SETUP,
}

export const update = {
  name: UPDATE,
  describe: 'Update Pando packages to the latest versions',
  handler: pandoUpdate,
  value: UPDATE,
}
