import { expect, describe, test } from 'bun:test'
import { realpathSync } from 'fs'
import { actions } from './harness'

const pandoExe = realpathSync('src/index.mts')

describe('general pando cli', () => {
  test('should prompt the user to select a cli path if no valid args are provided', () => {
    const { stdout, exitCode } = Bun.spawnSync({
      cmd: ['bun', 'run', pandoExe],
      stdout: 'pipe',
      stderr: 'pipe',
    })
    expect(stdout.toString()).toInclude(
      'Welcome to the Pando CLI! An argument "setup" or "update" is required to \ncontinue. Which would you like to select?',
    )
    expect(exitCode).toBe(1)
  })

  test('should initiate pandoSetup when selected', async () => {
    const proc = Bun.spawn({
      cmd: ['bun', 'run', pandoExe],
      stdout: 'pipe',
      stderr: 'pipe',
      stdin: 'pipe',
    })
    proc.stdin.write(actions.ENTER)
    proc.stdin.end()

    const text = await new Response(proc.stdout).text()
    expect(text).toInclude('Welcome to Pando setup')
  })

  test('should initiate pandoUpdate when selected', async () => {
    const proc = Bun.spawn({
      cmd: ['bun', 'run', pandoExe],
      stdout: 'pipe',
      stderr: 'pipe',
      stdin: 'pipe',
    })
    proc.stdin.write(actions.DOWN)
    proc.stdin.write(actions.ENTER)
    proc.stdin.end()

    const text = await new Response(proc.stdout).text()
    expect(text).toInclude('Welcome to Pando update')
  })
})
