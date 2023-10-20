import { PMOptions } from 'shared/types.mts'

export const step1Msg = 'Step 1: Confirm your package manager'

export function confirmDetectedPm(lockFileName: string, pm: PMOptions) {
  return `We've detected a ${lockFileName} file. Would you like us to install dependencies using ${pm}?`
}

// export function pmNameConfirmed(pm: PMOptions, packages: string[]) {
//   return `Installing ${packages.join(', ')} using ${pm}...`
// }
