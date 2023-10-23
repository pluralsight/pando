import { CLIOPERATION } from 'shared/const.mts'
import { getWelcomeMessage } from 'shared/prompts.mts'

export function pandoUpdate() {
  console.log(getWelcomeMessage(CLIOPERATION.UPDATE))
}
