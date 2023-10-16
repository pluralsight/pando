import { describe, test, expect } from 'bun:test'
import { setup } from './helpers'

describe('pando update', () => {
  test('should execute the cli with the update arg', async () => {
    const { stdout, stdin } = setup('update')
    stdin.end()
    const res = await new Response(stdout).text()
    expect(res).toBe('Welcome to Pando update\n')
  })
})
