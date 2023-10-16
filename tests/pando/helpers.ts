import { spawn } from 'bun'
import { getPandoExe } from './harness.ts'

export function setup() {
  return spawn({
    cmd: ['bun', 'run', 'src', 'index.mts'],
    cwd: getPandoExe(),
    stdout: 'pipe',
    stderr: 'pipe',
    stdin: 'pipe',
  })
}
