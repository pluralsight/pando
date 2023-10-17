import { describe, test, expect } from 'bun:test'
import { setup } from './helpers'
import { ENTER } from './harness'

describe('pando setup', () => {
  test('should execute the cli with the setup arg', async () => {
    const { stdout, stdin } = setup('setup')
    stdin.end()
    const res = await new Response(stdout).text()
    expect(res).toBe('Welcome to Pando setup\n')
  })
  test('should initiate pandoSetup when selected', async () => {
    const proc = setup()
    proc.stdin.write(ENTER)
    proc.stdin.end()

    const text = await new Response(proc.stdout).text()
    expect(text).toInclude('Welcome to Pando setup')
  })
})
