import { existsSync } from 'fs'
import {
  BUN,
  BUNLOCK,
  NPM,
  NPMLOCK,
  PNPM,
  PNPMLOCK,
  YARN,
  YARNLOCK,
} from './const.mts'
import inquirer from 'inquirer'

export function detectPm(): string | void {
  if (existsSync(BUNLOCK)) return BUN
  if (existsSync(PNPMLOCK)) return PNPM
  if (existsSync(YARNLOCK)) return YARN
  if (existsSync(NPMLOCK)) return NPM
}

export async function manuallySelectPm() {
  try {
    return await inquirer.prompt({
      name: 'pm',
      type: 'list',
      message: 'which pm?',
      choices: [
        {
          value: BUN,
        },
        {
          value: PNPM,
        },
        { value: YARN },
        { value: NPM },
      ],
    })
  } catch (err) {
    console.error(err)
  }
}
