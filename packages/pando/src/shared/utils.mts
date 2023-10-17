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
import { relative } from 'path'

function doesLockfileExist(lockFileName: string): boolean {
  const relativePath = relative(import.meta.path, `pando/${lockFileName}`)
  return existsSync(relativePath)
}

export function detectPm() {
  let pm
  if (doesLockfileExist(BUNLOCK)) pm = BUN
  if (doesLockfileExist(PNPMLOCK)) pm = PNPM
  if (doesLockfileExist(YARNLOCK)) pm = YARN
  if (doesLockfileExist(NPMLOCK)) pm = NPM
  return pm
}

export async function manuallySelectPm() {
  try {
    return await inquirer.prompt({
      name: 'pm',
      type: 'list',
      message: 'please select your preferred package manager',
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

export async function confirmProceed(): Promise<boolean | void> {
  try {
    return await inquirer.prompt([
      {
        name: 'confirm',
        type: 'confirm',
        message: 'ok to proceed?',
      },
    ])
  } catch (err) {
    return console.error(err)
  }
}
