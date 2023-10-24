import { CLIOperation } from './types.mts'
import confirm from '@inquirer/confirm'

export function getCliOperationError(cmd: CLIOperation) {
  return `Oh no! There was a problem running the ${cmd} command. Please report this error to the  Pando Team by submitting an issue on Github: https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&projects=&template=bug.yml&title=%5BBug%3F%5D%3A+.`
}

export function getGenericError() {
  return `Oh no! There was a problem running the command. Please report this error to the  Pando Team by submitting an issue on Github: https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&projects=&template=bug.yml&title=%5BBug%3F%5D%3A+.`
}

export function getWelcomeMessage(cmd: CLIOperation) {
  return `Welcome to Pando ${cmd}`
}

export async function confirmProceed() {
  return await confirm({ message: 'ok to proceed?' })
}

export const usage =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

export const welcome =
  'Welcome to the Pando CLI! An argument "setup" or "update" is required to continue. Which would you like to select?'

export const denyProceed =
  'No worries. You can always return to run the cli another time. Have a good day!'
