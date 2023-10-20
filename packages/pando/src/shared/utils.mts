import { existsSync } from 'fs'
import {
  BUNLOCK,
  NPMLOCK,
  PNPMLOCK,
  YARNLOCK,
  installScripts,
} from './const.mts'
import select from '@inquirer/select'
import confirm from '@inquirer/confirm'
import { relative } from 'path'
import { denyProceed } from './prompts.mts'
import { spawn } from 'bun'
import { PMOptions } from './types.mts'

function doesLockfileExist(lockFileName: string): boolean {
  const relativePath = relative(import.meta.path, `pando/${lockFileName}`)
  return existsSync(relativePath)
}

export function detectPm(): PMOptions | void {
  if (doesLockfileExist(BUNLOCK)) return PMOptions.BUN
  if (doesLockfileExist(PNPMLOCK)) return PMOptions.PNPM
  if (doesLockfileExist(YARNLOCK)) return PMOptions.YARN
  if (doesLockfileExist(NPMLOCK)) return PMOptions.NPM
}

export async function manuallySelectPm(): Promise<PMOptions | void> {
  try {
    return await select({
      message: 'please select your preferred package manager',
      choices: [
        {
          value: PMOptions.BUN,
        },
        {
          value: PMOptions.PNPM,
        },
        { value: PMOptions.YARN },
        { value: PMOptions.NPM },
      ],
    })
  } catch (err) {
    console.error(err)
  }
}
