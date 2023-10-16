import { describe, test, expect } from 'bun:test'
import { setup } from './helpers'

describe('pando setup', () => {
  test('should execute the cli with the setup arg', async () => {
    const { stdout, stdin } = setup('setup')
    stdin.end()
    const res = await new Response(stdout).text()
    expect(res).toBe('Welcome to Pando setup\n')
  })
})
