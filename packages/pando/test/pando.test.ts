import { selectArg } from '../index.mts'
import { it, expect } from 'bun:test'
import { realpathSync } from 'fs'

const pandoExe = realpathSync('src/index.mts')

it('should execute the cli with the update arg', () => {
  const { stdout, exitCode } = Bun.spawnSync({
    cmd: ['bun', 'run', pandoExe],
    stdout: 'pipe',
    stderr: 'pipe',
  })
  expect(stdout.toString()).toBe(
    '? Welcome to the Pando CLI! An argument "setup" or "update" is required to \ncontinue. Which would you like to select? (Use arrow keys)\n❯ setup \n   update \u001b[10D\u001b[9C',
  )
  expect(exitCode).toBe(1)
})
