import { PMOptions } from 'shared/types.mts'

export const step2Msg = 'Step 2: Install Pando Packages'

export const step3Msg = 'Step 3: Install required dependencies'

export function pkgInstallMsg(pm: PMOptions, packages: string[]) {
  return `Installing ${packages.join(', ')} using ${pm}...`
}
