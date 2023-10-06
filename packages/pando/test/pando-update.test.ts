import { it, expect } from 'bun:test'
import { realpathSync } from 'fs'

const pandoExe = realpathSync('src/index.mts')

it('should execute the cli with the update arg', () => {
  const { stdout, exitCode } = Bun.spawnSync({
    cmd: ['bun', 'run', pandoExe, 'update'],
    stdout: 'pipe',
    stderr: 'pipe',
  })
  expect(stdout.toString()).toBe('Welcome to Pando update\n')
  expect(exitCode).toBe(0)
})
