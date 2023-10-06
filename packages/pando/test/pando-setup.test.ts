import { it, expect } from 'bun:test'
import { pandoExe } from './harness'

it('should execute the cli with the setup arg', () => {
  const { stdout, exitCode } = Bun.spawnSync({
    cmd: ['bun', 'run', pandoExe, 'setup'],
    stdout: 'pipe',
    stderr: 'pipe',
  })
  expect(stdout.toString()).toBe('Welcome to Pando setup\n')
  expect(exitCode).toBe(0)
})
