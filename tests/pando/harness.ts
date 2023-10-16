import { resolve } from 'node:path'

export function getPandoExe() {
  return resolve('packages', 'pando')
}

export const DOWN = '\x1B\x5B\x42'
export const UP = '\x1B\x5B\x41'
export const ENTER = '\x0D'
export const SPACE = '\x20'
