import { CLIOperation, PMOptions } from './types.mts'

export function getCliError(cmd?: CLIOperation) {
  return `Oh no! There was a problem running the${
    cmd ? ' ' + cmd + ' ' : ' '
  }command. Please report this error to the  Pando Team by submitting an issue on Github: https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&projects=&template=bug.yml&title=%5BBug%3F%5D%3A+.`
}
export function getWelcomeMessage(cmd: CLIOperation) {
  return `Welcome to Pando ${cmd}`
}
export function confirmDetectedPm(pm: PMOptions) {
  return `We've detected that your package manager is ${pm}. Does that sound right?`
}
export function pmNameConfirmed(pm: PMOptions) {
  return `we've determined that ${pm} is your package manager! Great.`
}

export const usage =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

export const welcome =
  'Welcome to the Pando CLI! An argument "setup" or "update" is required to continue. Which would you like to select?'

export const denyProceed =
  'No worries. You can always return to run the cli another time. Have a good day!'

export const setupStep2 = 'Step 2: Install Pando Packages'

export const setupStep3 = 'Step 3: Install required dependencies'
