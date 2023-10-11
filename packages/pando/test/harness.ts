import { realpathSync } from 'fs'

export const pandoExe = realpathSync('src/index.mts')

export const DOWN = '\x1B\x5B\x42'
export const UP = '\x1B\x5B\x41'
export const ENTER = '\x0D'
export const SPACE = '\x20'
