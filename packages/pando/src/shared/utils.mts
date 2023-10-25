import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import input from '@inquirer/input'
import { LOCKFILES, PMOPTIONS } from './const.mts'
import { Lockfiles, PMOptions } from './types.mts'

function findAnyLockfile(path: string) {
  const lockfiles = Object.values(LOCKFILES)
  const anyExist = lockfiles.filter((lockfiles) => {
    return existsSync(`${path}/${lockfiles}`)
  })
  return !!anyExist.length
}

function findProjectRoot() {
  let currDir = import.meta.dir
  let traversed = 0
  while (!findAnyLockfile(currDir) && traversed < 50) {
    traversed++
    currDir = resolve(currDir, '..')
  }
  return currDir
}

function doesLockfileExist(lockFileName: string): boolean {
  const projectRoot = findProjectRoot()
  return existsSync(`${projectRoot}/${lockFileName}`)
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

export async function manuallySelectInstallScript(): Promise<string[]> {
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
