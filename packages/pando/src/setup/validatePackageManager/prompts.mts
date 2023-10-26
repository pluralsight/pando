import { SupportedPackageManagers } from '../../shared/const.mts'

export const confirmPackageManagerPrompt =
  'Step 1: Confirm your package manager'

export function confirmDetectedPm(pm: SupportedPackageManagers) {
  return `Looks like you are using ${pm}. Would you like us to install dependencies with this package manager?`
}
