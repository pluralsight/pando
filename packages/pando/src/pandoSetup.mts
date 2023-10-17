import { confirmProceed, detectPm, manuallySelectPm } from 'shared/utils.mts'
import confirm from '@inquirer/confirm'
import { pandoPkgs, reqdDepPkgs } from 'shared/const.mts'
import { denyProceed } from 'shared/prompts.mts'

export async function pandoSetup() {
  console.log('Welcome to Pando setup')
  console.log('Step 1: Determine package manager')
  let pm = await detectPm()
  const confirmPm = await confirm({
    message: `We've detected that your package manager is ${pm}. Does that sound right?`,
  })
  if (!confirmPm) {
    pm = await manuallySelectPm()
  }
  console.log(`we've determined that ${pm} is your package manager! Great.`)

  console.log('Step 2: Install Pando Packages')
  console.log(
    `The Pando packages we will need to install: ${pandoPkgs.join(', ')}`,
  )
  const ans1 = await confirm({ message: 'ok to proceed?' })
  console.log('ans', ans1)
  if (ans1) {
    console.log('yay')
  } else {
    console.log(denyProceed)
  }
  console.log('Step 3: Install required dependencies')
  console.log(
    `The dependencies we will need to install: ${reqdDepPkgs.join(', ')}`,
  )
  const ans2 = await confirm({ message: 'ok to proceed?' })
  console.log('ans', ans2)
  if (ans2) {
    console.log('yay')
  } else {
    console.log(denyProceed)
  }
}
