import { confirmProceed, detectPm, manuallySelectPm } from 'shared/utils.mts'
import inquirer from 'inquirer'
import { pandoPkgs } from 'shared/const.mts'

export async function pandoSetup() {
  console.log('Welcome to Pando setup')
  console.log('Step 1: Determine package manager')
  let pm = await detectPm()
  const confirmPm = await inquirer.prompt([
    {
      name: 'confirmpm',
      type: 'confirm',
      message: `We've detected that your package manager is ${pm}. Does that sound right?`,
    },
  ])
  if (!confirmPm.confirmpm) {
    pm = await manuallySelectPm()
  }
  console.log(`we've determined that ${pm} is your package manager! Great.`)

  console.log('Step 2: Install Pando Packages')
  console.log(
    `The Pando packages we will need to install: ${pandoPkgs.join(', ')}`,
  )
  const proceedPandoPkgs = await confirmProceed()
  if (proceedPandoPkgs) {
    console.log('cool')
  } else {
    console.log('also cool')
  }
}
