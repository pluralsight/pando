import { spawn } from 'bun'
import { getPandoExe } from './harness.ts'
import { relative } from 'path'

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
