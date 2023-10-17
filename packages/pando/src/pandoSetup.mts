import { confirmAndInstall, detectPm, manuallySelectPm } from 'shared/utils.mts'
import confirm from '@inquirer/confirm'
import { pandoPkgs, reqdDepPkgs } from 'shared/const.mts'
import { getCliError } from 'shared/prompts.mts'

export async function pandoSetup() {
  // step 1
  console.log('Welcome to Pando setup')
  console.log('Step 1: Determine package manager')
  let pm = detectPm()
  const confirmPm = await confirm({
    message: `We've detected that your package manager is ${pm}. Does that sound right?`,
  })
  if (!confirmPm) {
    pm = await manuallySelectPm()
  }
  if (pm) {
    console.log(`we've determined that ${pm} is your package manager! Great.`)
  } else {
    console.log(getCliError())
    return
  }
  // step 2
  console.log('Step 2: Install Pando Packages')
  const pandoPkgSuccess = await confirmAndInstall(pm, pandoPkgs)
  if (!pandoPkgSuccess) return
  // step 3
  console.log('Step 3: Install required dependencies')
  const depPkgSuccess = await confirmAndInstall(pm, reqdDepPkgs)
  if (!depPkgSuccess) return
}
