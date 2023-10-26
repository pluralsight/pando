import { update } from '../commands/options.mts'
import { CLICommand } from '../shared/const.mts'
import { getWelcomeMessage } from '../shared/prompts.mts'

export function pandoUpdate() {
  console.log(getWelcomeMessage(update.name as CLICommand))
}
