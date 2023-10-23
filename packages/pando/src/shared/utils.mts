import { existsSync } from 'fs'
import { LOCKFILES, PMOPTIONS } from './const.mts'
import select from '@inquirer/select'
import { relative } from 'path'
import { Lockfiles, PMOptions } from './types.mts'
import input from '@inquirer/input'

function doesLockfileExist(lockFileName: string): boolean {
  console.log('lockfilename', lockFileName)
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

export function detectPm(lockfile?: Lockfiles): PMOptions | void {
  switch (lockfile) {
    case LOCKFILES.BUNLOCK:
      return PMOPTIONS.BUN
    case LOCKFILES.PNPMLOCK:
      return PMOPTIONS.PNPM
    case LOCKFILES.YARNLOCK:
      return PMOPTIONS.YARN
    case LOCKFILES.NPMLOCK:
      return PMOPTIONS.NPM
    default:
      return
  }
}

export async function manuallySelectPm(): Promise<string[]> {
  try {
    const script = await input({
      message:
        'please input the command you would like to use to install dependencies',
    })
    return script.split(' ')
  } catch (_error) {
    throw new Error()
  }
}

export async function pause(ms: number) {
  return new Promise<void>((res) => {
    setTimeout(() => res(), ms)
  })
}
