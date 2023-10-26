import confirm from '@inquirer/confirm'
import { type CLICommand } from './const.mts'

export function getWelcomeMessage(command: CLICommand) {
  return `Welcome to Pando ${command}`
}

export async function confirmProceed() {
  return await confirm({ message: 'ok to proceed?' })
}

export const usageInfo =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

export const welcome =
  'Welcome to the Pando CLI! An argument "setup" or "update" is required to continue. Which would you like to select?'

export const denyProceed =
  'No worries. You can always return to run the cli another time. Have a good day!'
