import { detectPm, manuallySelectPm } from 'shared/utils.mts'
import { confirmDetectedPm, pmNameConfirmed } from './prompts.mts'
import confirm from '@inquirer/confirm'
import { PMOptions } from 'shared/types.mts'
import { stepMessages } from 'shared/prompts.mts'

export async function step1() {
  const detectedPm = detectPm()
  const selectedPm = await confirmDetectedOrSelect(detectedPm)
  console.log(stepMessages.step1)
  if (selectedPm) {
    console.log(pmNameConfirmed(selectedPm))
    return selectedPm
  } else {
    throw new Error()
  }
}

async function confirmDetectedOrSelect(
  detectedPm: PMOptions | void,
): Promise<PMOptions | void> {
  return detectedPm
    ? await isDetectedCorrect(detectedPm)
    : await manuallySelectPm()
}

async function isDetectedCorrect(pm: PMOptions): Promise<PMOptions | void> {
  const confirmPm = await confirm({
    message: confirmDetectedPm(pm),
  })
  if (!confirmPm) {
    return await manuallySelectPm()
  }
  return pm
}
