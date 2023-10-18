import { spawn } from 'bun'
import { relative } from 'node:path'

export function getPandoExe() {
  return relative(import.meta.dir, 'packages/pando/src')
}
export function setup(command?: 'update' | 'setup') {
  const initialCmd = ['bun', 'run', 'index.mts']
  const cmd = command ? [...initialCmd, command] : [...initialCmd]
  return spawn({
    cmd,
    cwd: getPandoExe(),
    stdout: 'pipe',
    stderr: 'pipe',
    stdin: 'pipe',
  })
}
export async function pause(ms: number) {
  return new Promise<void>((res) => {
    setTimeout(() => res(), ms)
  })
}

export const DOWN = '\x1B\x5B\x42'
export const UP = '\x1B\x5B\x41'
export const ENTER = '\x0D'
export const SPACE = '\x20'
export const detectPackageManagerMessage =
  "We've detected that your package manager is"
