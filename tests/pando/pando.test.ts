import { expect, describe, test } from 'bun:test'
import { setup } from './helpers'

describe('general pando cli', () => {
  test('should prompt the user to select a cli path if no valid args are provided', async () => {
    const { stdout, stdin } = setup()
    stdin.end()
    const res = await new Response(stdout).text()
    expect(res).toInclude(
      'Welcome to the Pando CLI! An argument "setup" or "update" is required to \ncontinue. Which would you like to select?',
    )
  })
})
