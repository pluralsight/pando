export const CLIOPERATION = {
  SETUP: 'setup',
  UPDATE: 'update',
} as const

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
export const installScripts: { [key: string]: string[] } = {
  [LOCKFILES.BUNLOCK]: [PMOPTIONS.BUN, 'add'],
  [LOCKFILES.PNPMLOCK]: [PMOPTIONS.PNPM, 'add'],
  [LOCKFILES.YARNLOCK]: [PMOPTIONS.YARN, 'add'],
  [LOCKFILES.NPMLOCK]: [PMOPTIONS.NPM, 'install'],
}
