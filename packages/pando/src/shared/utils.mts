import { existsSync } from 'fs'
import { LOCKFILES, PMOPTIONS } from './const.mts'
import select from '@inquirer/select'
import { relative } from 'path'
import { Lockfiles, PMOptions } from './types.mts'

function doesLockfileExist(lockFileName: string): boolean {
  const relativePath = relative(import.meta.path, `pando/${lockFileName}`)
  return existsSync(relativePath)
}

export function detectLockfile(): Lockfiles | void {
  switch (true) {
    case doesLockfileExist(LOCKFILES.BUNLOCK):
      return LOCKFILES.BUNLOCK
    case doesLockfileExist(LOCKFILES.PNPMLOCK):
      return LOCKFILES.PNPMLOCK
    case doesLockfileExist(LOCKFILES.YARNLOCK):
      return LOCKFILES.YARNLOCK
    case doesLockfileExist(LOCKFILES.NPMLOCK):
      return LOCKFILES.NPMLOCK
    default:
      return
  }
}

export function detectPm(): PMOptions | void {
  switch (true) {
    case doesLockfileExist(LOCKFILES.BUNLOCK):
      return PMOPTIONS.BUN
    case doesLockfileExist(LOCKFILES.PNPMLOCK):
      return PMOPTIONS.PNPM
    case doesLockfileExist(LOCKFILES.YARNLOCK):
      return PMOPTIONS.YARN
    case doesLockfileExist(LOCKFILES.NPMLOCK):
      return PMOPTIONS.NPM
    default:
      return
  }
}

export async function manuallySelectPm(): Promise<PMOptions | void> {
  try {
    return await select({
      message: 'please select your preferred package manager',
      choices: [
        {
          value: PMOPTIONS.BUN,
        },
        {
          value: PMOPTIONS.PNPM,
        },
        { value: PMOPTIONS.YARN },
        { value: PMOPTIONS.NPM },
      ],
    })
  } catch (err) {
    console.error(err)
  }
}

export async function pause(ms: number) {
  return new Promise<void>((res) => {
    setTimeout(() => res(), ms)
  })
}
