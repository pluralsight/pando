import { spawn } from 'bun'
import { getPandoExe } from './harness.ts'

export function setup(command?: 'update' | 'setup') {
  const initialCmd = ['bun', 'run', 'src/index.mts']
  const cmd = command ? [...initialCmd, command] : [...initialCmd]
  return spawn({
    cmd,
    cwd: getPandoExe(),
    stdout: 'pipe',
    stderr: 'pipe',
    stdin: 'pipe',
  })
}
