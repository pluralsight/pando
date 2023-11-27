import { expect, describe, test } from 'bun:test'
import { ENTER, DOWN } from './harness.ts'
import { setup } from './helpers.ts'

describe('general pando cli', () => {
  test('should prompt the user to select a cli path if no valid args are provided', async () => {
    const { stdout, stdin } = setup()
    stdin.end()
    const res = await new Response(stdout).text()
    expect(res).toInclude(
      'Welcome to the Pando CLI! An argument "setup" or "update" is required to \ncontinue. Which would you like to select?',
    )
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
