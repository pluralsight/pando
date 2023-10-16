import { expect, describe, test } from 'bun:test'
import { ENTER, DOWN } from './harness'
import { setup } from './helpers'

describe('general pando cli', () => {
  test('should prompt the user to select a cli path if no valid args are provided', () => {
    const { stdout, exitCode } = setup()
    expect(stdout.toString()).toInclude(
      'Welcome to the Pando CLI! An argument "setup" or "update" is required to \ncontinue. Which would you like to select?',
    )
    expect(exitCode).toBe(1)
  })

  test('should initiate pandoSetup when selected', async () => {
    const proc = setup()
    proc.stdin.write(ENTER)
    proc.stdin.end()

    const text = await new Response(proc.stdout).text()
    expect(text).toInclude('Welcome to Pando setup')
  })

  test('should initiate pandoUpdate when selected', async () => {
    const proc = setup()
    proc.stdin.write(DOWN)
    proc.stdin.write(ENTER)
    proc.stdin.end()

    const text = await new Response(proc.stdout).text()
    expect(text).toInclude('Welcome to Pando update')
  })
})
