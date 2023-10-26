import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import input from '@inquirer/input'
import {
  BUNLOCK,
  PNPMLOCK,
  YARNLOCK,
  NPMLOCK,
  BUN,
  PNPM,
  YARN,
  NPM,
  SupportedPackageManagers,
  Lockfiles,
} from './const.mts'

function findAnyLockfile(path: string) {
  const lockfiles = [BUNLOCK, PNPMLOCK, YARNLOCK, NPMLOCK]
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
    case doesLockfileExist(BUNLOCK):
      return BUNLOCK
    case doesLockfileExist(PNPMLOCK):
      return PNPMLOCK
    case doesLockfileExist(YARNLOCK):
      return YARNLOCK
    case doesLockfileExist(NPMLOCK):
      return NPMLOCK
    default:
      return
  }
}

export function detectPm(
  lockfile?: Lockfiles,
): SupportedPackageManagers | void {
  switch (lockfile) {
    case BUNLOCK:
      return BUN
    case PNPMLOCK:
      return PNPM
    case YARNLOCK:
      return YARN
    case NPMLOCK:
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
