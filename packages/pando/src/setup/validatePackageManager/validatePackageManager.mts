import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import confirm from '@inquirer/confirm'
import { detectPm, manuallySelectInstallScript } from '../../shared/utils.mts'
import {
  BUN_LOCK,
  Lockfiles,
  NPM_LOCK,
  PNPM_LOCK,
  SupportedPackageManagers,
  YARN_LOCK,
  getInstallScript,
} from '../../shared/const.mts'
import { confirmDetectedPm, confirmPackageManagerPrompt } from './prompts.mts'

export async function validatePackageManager() {
  const detectedLockfile = detectLockfile()
  const detectedPm = detectedLockfile && detectPm(detectedLockfile)

  console.log(confirmPackageManagerPrompt)

  const selectedPm = await confirmDetectedOrManuallySelect(
    detectedLockfile,
    detectedPm,
  )

  if (selectedPm) {
    return selectedPm
  }

  throw new Error()
}

async function confirmDetectedOrManuallySelect(
  detectedLockfile: Lockfiles | void,
  detectedPm: SupportedPackageManagers | void,
): Promise<string[] | undefined> {
  if (detectedLockfile && detectedPm) {
    return await confirmDetected(detectedLockfile, detectedPm)
  }
  return await manuallySelectInstallScript()
}

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

async function confirmDetected(
  lockfile: Lockfiles,
  pm: SupportedPackageManagers,
): Promise<string[] | undefined> {
  const confirmPm = await confirm({
    message: confirmDetectedPm(pm),
  })
  if (confirmPm) {
    return getInstallScript(lockfile)
  }
  return await manuallySelectInstallScript()
}
