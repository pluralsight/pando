import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import input from '@inquirer/input'
import {
  BUN_LOCK,
  PNPM_LOCK,
  YARN_LOCK,
  NPM_LOCK,
  BUN,
  PNPM,
  YARN,
  NPM,
  type SupportedPackageManagers,
  type Lockfiles,
} from './const.mts'

function findAnyLockfile(path: string) {
  const lockfiles = [BUN_LOCK, PNPM_LOCK, YARN_LOCK, NPM_LOCK]
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
    case doesLockfileExist(BUN_LOCK):
      return BUN_LOCK
    case doesLockfileExist(PNPM_LOCK):
      return PNPM_LOCK
    case doesLockfileExist(YARN_LOCK):
      return YARN_LOCK
    case doesLockfileExist(NPM_LOCK):
      return NPM_LOCK
    default:
      return
  }
}

export function detectPm(
  lockfile?: Lockfiles,
): SupportedPackageManagers | void {
  switch (lockfile) {
    case BUN_LOCK:
      return BUN
    case PNPM_LOCK:
      return PNPM
    case YARN_LOCK:
      return YARN
    case NPM_LOCK:
      return NPM
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

export function fullPandoPackageName(packages: string[]) {
  return packages.map((pkg) => `@pluralsight/${pkg}`)
}
