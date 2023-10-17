// cli operations
export const SETUP = 'setup'
export const UPDATE = 'update'

// supported package managers
export const BUN = 'bun'
export const PNPM = 'pnpm'
export const YARN = 'yarn'
export const NPM = 'npm'

// lockfiles
export const BUNLOCK = 'bun.lockb'
export const PNPMLOCK = 'pnpm-lock.yaml'
export const YARNLOCK = 'yarn.lock'
export const NPMLOCK = 'package-lock.json'

// packages
export const pandoPkgs = [
  '@pluralsight/react',
  '@pluralsight/icons',
  '@pluralsight/panda-preset',
]
export const reqdDepPkgs = ['@pandacss/dev', 'postcss', 'autoprefixer']
