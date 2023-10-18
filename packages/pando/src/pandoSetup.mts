import { confirmAndInstall, detectPm, manuallySelectPm } from 'shared/utils.mts'
import confirm from '@inquirer/confirm'
import { pandoPkgs, reqdDepPkgs } from 'shared/const.mts'
import {
  confirmDetectedPm,
  getCliError,
  pmNameConfirmed,
  setupStep2,
  setupStep3,
} from 'shared/prompts.mts'

export async function pandoSetup() {
  // step 1
  console.log('Welcome to Pando setup')
  console.log('Step 1: Determine package manager')
  let pm = detectPm()
  if (pm) {
    const confirmPm = await confirm({
      message: confirmDetectedPm(pm),
    })
    if (!confirmPm) {
      pm = await manuallySelectPm()
    }
  }
  if (pm) {
    console.log(pmNameConfirmed(pm))
  } else {
    console.log(getCliError())
    return
  }
  // step 2
  const pandoPkgSuccess = await confirmAndInstall(setupStep2, pm, pandoPkgs)
  if (!pandoPkgSuccess) return
  // step 3
  const depPkgSuccess = await confirmAndInstall(setupStep3, pm, reqdDepPkgs)
  if (!depPkgSuccess) return
}
