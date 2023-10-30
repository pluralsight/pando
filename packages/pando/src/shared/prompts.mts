import confirm from '@inquirer/confirm'
import { type CLICommand } from './const.mts'

// GENERAL

export function getWelcomeMessage(command: CLICommand) {
  return `Welcome to Pando ${command}`
}

export async function confirmProceed() {
  return await confirm({ message: 'ok to proceed?' })
}

export const usageInfo =
  '\nUsage: Tools to make it easy to setup and update projects that use the Pando Design System.'

export const welcome =
  'Welcome to the Pando CLI! An option "setup" or "update" is required to continue. Which would you like to select?'

export const denyProceed = 'Okay Byeeeeeeee! 👋'

// SETUP

export const pandoSetupWelcome = `Let's get started setting up your new Pando project! First, let's see if we kind find a lockfile. 🕵️‍♀️`
