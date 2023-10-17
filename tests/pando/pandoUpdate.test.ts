import { describe, test, expect } from 'bun:test'
import { setup } from './helpers'
import { DOWN, ENTER } from './harness'

describe('pando update', () => {
  test('should execute the cli with the update arg', async () => {
    const { stdout, stdin } = setup('update')
    stdin.end()
    const res = await new Response(stdout).text()
    expect(res).toBe('Welcome to Pando update\n')
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
