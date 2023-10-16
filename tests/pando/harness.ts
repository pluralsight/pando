import { relative } from 'node:path'

export function getPandoExe() {
  return relative(import.meta.dir, 'packages/pando/src')
}

export const DOWN = '\x1B\x5B\x42'
export const UP = '\x1B\x5B\x41'
export const ENTER = '\x0D'
export const SPACE = '\x20'
