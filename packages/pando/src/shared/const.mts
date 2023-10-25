import { Lockfiles } from './types.mts'

export const SETUP = 'setup'
export const UPDATE = 'update'

export const PMOPTIONS = {
  BUN: 'bun',
  PNPM: 'pnpm',
  YARN: 'yarn',
  NPM: 'npm',
} as const

// lockfiles
export const LOCKFILES = {
  BUNLOCK: 'bun.lockb',
  PNPMLOCK: 'pnpm-lock.yaml',
  YARNLOCK: 'yarn.lock',
  NPMLOCK: 'package-lock.json',
} as const

// packages
export const pandoPkgs = [
  '@pluralsight/react',
  '@pluralsight/icons',
  '@pluralsight/panda-preset',
]
export const reqdDepPkgs = ['@pandacss/dev', 'postcss', 'autoprefixer']

// install scripts
export function getInstallScript(lockfile: Lockfiles) {
  switch (lockfile) {
    case LOCKFILES.BUNLOCK:
      return [PMOPTIONS.BUN, 'add']
    case LOCKFILES.PNPMLOCK:
      return [PMOPTIONS.PNPM, 'add']
    case LOCKFILES.YARNLOCK:
      return [PMOPTIONS.YARN, 'add']
    case LOCKFILES.NPMLOCK:
      return [PMOPTIONS.NPM, 'install']
    default:
      return
  }
}
