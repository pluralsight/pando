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
import select from '@inquirer/select'
import confirm from '@inquirer/confirm'
import { relative } from 'path'
import { denyProceed } from './prompts.mts'

function doesLockfileExist(lockFileName: string): boolean {
  const relativePath = relative(import.meta.path, `pando/${lockFileName}`)
  return existsSync(relativePath)
}

export function detectPm(): string {
  let pm = ''
  if (doesLockfileExist(BUNLOCK)) pm = BUN
  if (doesLockfileExist(PNPMLOCK)) pm = PNPM
  if (doesLockfileExist(YARNLOCK)) pm = YARN
  if (doesLockfileExist(NPMLOCK)) pm = NPM
  return pm
}

export async function manuallySelectPm(): Promise<string> {
  try {
    return await select({
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
    return ''
  }
}

export async function confirmAndInstall(pkgs: string[]): Promise<boolean> {
  console.log(`We will need to install these packages: ${pkgs.join(', ')}`)
  const okToProceed = await confirm({ message: 'ok to proceed?' })
  if (okToProceed) {
    console.log('yay')
    return true
  } else {
    console.log(denyProceed)
    return false
  }
}
