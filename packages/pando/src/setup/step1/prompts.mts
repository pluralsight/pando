import { PMOptions } from 'shared/types.mts'

export const step1Msg = 'Step 1: Confirm your package manager'

export function confirmDetectedPm(pm: PMOptions) {
  return `We've detected that your package manager is ${pm}. Does that sound right?`
}

export function pmNameConfirmed(pm: PMOptions) {
  return `we've determined that ${pm} is your package manager! Great.`
}
