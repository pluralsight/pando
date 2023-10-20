import { detectLockfile, detectPm, manuallySelectPm } from 'shared/utils.mts'
import { confirmDetectedPm, step1Msg } from './prompts.mts'
import confirm from '@inquirer/confirm'
import { PMOptions } from 'shared/types.mts'

export async function step1() {
  const detectedPm = detectPm()
  const detectedLockfile = detectLockfile()
  const selectedPm = await confirmDetectedOrSelect(detectedLockfile, detectedPm)
  console.log(step1Msg)
  if (selectedPm) {
    return selectedPm
  } else {
    throw new Error()
  }
}

async function confirmDetectedOrSelect(
  detectedLockfile: string | void,
  detectedPm: PMOptions | void,
): Promise<PMOptions | void> {
  return detectedLockfile && detectedPm
    ? await isDetectedCorrect(detectedLockfile, detectedPm)
    : await manuallySelectPm()
}

async function isDetectedCorrect(
  lockfile: string,
  pm: PMOptions,
): Promise<PMOptions | void> {
  const confirmPm = await confirm({
    message: confirmDetectedPm(lockfile, pm),
  })
  return confirmPm ? pm : await manuallySelectPm()
}
