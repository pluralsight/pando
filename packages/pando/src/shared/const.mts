// OPTIONS

export const SETUP = 'setup'
export const UPDATE = 'update'

// PACKAGE MANAGERS

export const BUN = 'bun'
export const PNPM = 'pnpm'
export const YARN = 'yarn'
export const NPM = 'npm'

export const ADD = 'add'
export const INSTALL = 'install'

// LOCK FILES

export const BUN_LOCK = 'bun.lockb'
export const PNPM_LOCK = 'pnpm-lock.yaml'
export const YARN_LOCK = 'yarn.lock'
export const NPM_LOCK = 'package-lock.json'

// DEPENDENCIES

export const pandoDeps = ['react', 'icons', 'panda-preset']
export const reqDeps = ['@pandacss/dev', 'postcss', 'autoprefixer']

// PROMPTS

export function getInstallScript(lockfile: Lockfiles) {
  switch (lockfile) {
    case BUN_LOCK:
      return [BUN, ADD]
    case PNPM_LOCK:
      return [PNPM, ADD]
    case YARN_LOCK:
      return [YARN, ADD]
    case NPM_LOCK:
      return [NPM, INSTALL]
    default:
      return
  }
}

// types

export type CLICommand = typeof SETUP | typeof UPDATE

export type SupportedPackageManagers =
  | typeof BUN
  | typeof PNPM
  | typeof YARN
  | typeof NPM

export type Lockfiles =
  | typeof BUN_LOCK
  | typeof PNPM_LOCK
  | typeof YARN_LOCK
  | typeof NPM_LOCK
