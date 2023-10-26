export const SETUP = 'setup'
export const UPDATE = 'update'

export const BUN = 'bun'
export const PNPM = 'pnpm'
export const YARN = 'yarn'
export const NPM = 'npm'

export const BUN_LOCK = 'bun.lockb'
export const PNPM_LOCK = 'pnpm-lock.yaml'
export const YARN_LOCK = 'yarn.lock'
export const NPM_LOCK = 'package-lock.json'

export const pandoDeps = ['react', 'icons', 'panda-preset']
export const reqDeps = ['@pandacss/dev', 'postcss', 'autoprefixer']

export function getInstallScript(lockfile: Lockfiles) {
  switch (lockfile) {
    case BUN_LOCK:
      return [BUN, 'add']
    case PNPM_LOCK:
      return [PNPM, 'add']
    case YARN_LOCK:
      return [YARN, 'add']
    case NPM_LOCK:
      return [NPM, 'install']
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
