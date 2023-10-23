import { detectLockfile, detectPm, manuallySelectPm } from 'shared/utils.mts'
import { confirmDetectedPm, step1Msg } from './prompts.mts'
import confirm from '@inquirer/confirm'
import { Lockfiles, PMOptions } from 'shared/types.mts'
import { getInstallScript } from 'shared/const.mts'

export async function step1() {
  console.log(step1Msg)
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
  detectedPm: PMOptions | void,
): Promise<string[] | undefined> {
  if (detectedLockfile && detectedPm) {
    return await confirmDetected(detectedLockfile, detectedPm)
  }
  return await manuallySelectPm()
}

async function confirmDetected(
  lockfile: Lockfiles,
  pm: PMOptions,
): Promise<string[] | undefined> {
  const confirmPm = await confirm({
    message: confirmDetectedPm(lockfile, pm),
  })
  if (confirmPm) {
    return getInstallScript(lockfile)
  }
  return await manuallySelectPm()
}
