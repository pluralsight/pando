import confirm from '@inquirer/confirm'
import { confirmDetectedPm, confirmPackageManagerPrompt } from './prompts.mts'
import {
  detectLockfile,
  detectPm,
  manuallySelectInstallScript,
} from '../../shared/utils.mts'
import {
  Lockfiles,
  SupportedPackageManagers,
  getInstallScript,
} from '../../shared/const.mts'

export async function validatePackageManager() {
  console.log(confirmPackageManagerPrompt)
  const detectedLockfile = detectLockfile()
  const detectedPm = detectedLockfile && detectPm(detectedLockfile)
  const selectedPm = await confirmDetectedOrManuallySelect(
    detectedLockfile,
    detectedPm,
  )

  if (selectedPm) {
    return selectedPm
  } else {
    throw new Error()
  }
}

async function confirmDetectedOrManuallySelect(
  detectedLockfile: Lockfiles | void,
  detectedPm: SupportedPackageManagers | void,
): Promise<string[] | undefined> {
  if (detectedLockfile && detectedPm) {
    return await confirmDetected(detectedLockfile, detectedPm)
  }
  return await manuallySelectInstallScript()
}

async function confirmDetected(
  lockfile: Lockfiles,
  pm: SupportedPackageManagers,
): Promise<string[] | undefined> {
  const confirmPm = await confirm({
    message: confirmDetectedPm(pm),
  })
  if (confirmPm) {
    return getInstallScript(lockfile)
  }
  return await manuallySelectInstallScript()
}
