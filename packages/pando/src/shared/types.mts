export type CLIOperation = 'setup' | 'update' | undefined

// export type PMOptions = 'bun' | 'pnpm' | 'yarn' | 'npm' | undefined

export enum PMOptions {
  BUN = 'bun',
  PNPM = 'pnpm',
  YARN = 'yarn',
  NPM = 'npm',
}
