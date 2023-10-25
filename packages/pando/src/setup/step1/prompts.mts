import { PMOptions } from 'shared/types.mts'

export const step1Msg = 'Step 1: Confirm your package manager'

export function confirmDetectedPm(lockFileName: string, pm: PMOptions) {
  return `Looks like you are using ${pm}. Would you like us to install dependencies with this package manager?`
}
