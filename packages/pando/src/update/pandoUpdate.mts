import { update } from '../commands/options.mts'
import { getWelcomeMessage } from '../shared/prompts.mts'

export function pandoUpdate() {
  console.log(getWelcomeMessage(update.name))
}
