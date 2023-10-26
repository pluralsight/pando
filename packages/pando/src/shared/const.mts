export const SETUP = 'setup'
export const UPDATE = 'update'

export type CLICommand = typeof SETUP | typeof UPDATE

export const BUN = 'bun'
export const PNPM = 'pnpm'
export const YARN = 'yarn'
export const NPM = 'npm'

export type SupportedPackageManagers =
  | typeof BUN
  | typeof PNPM
  | typeof YARN
  | typeof NPM

export const BUNLOCK = 'bun.lockb'
export const PNPMLOCK = 'pnpm-lock.yaml'
export const YARNLOCK = 'yarn.lock'
export const NPMLOCK = 'package-lock.json'

export type Lockfiles =
  | typeof BUNLOCK
  | typeof PNPMLOCK
  | typeof YARNLOCK
  | typeof NPMLOCK

export const pandoPkgs = ['react', 'icons', 'panda-preset']
export const reqdDepPkgs = ['@pandacss/dev', 'postcss', 'autoprefixer']

export function getInstallScript(lockfile: Lockfiles) {
  switch (lockfile) {
    case BUNLOCK:
      return [BUN, 'add']
    case PNPMLOCK:
      return [PNPM, 'add']
    case YARNLOCK:
      return [YARN, 'add']
    case NPMLOCK:
      return [NPM, 'install']
    default:
      return
  }
}
