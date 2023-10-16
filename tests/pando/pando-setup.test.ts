import { describe, test, expect } from 'bun:test'
import { setup } from './helpers'

describe('pando setup', () => {
  test('should execute the cli with the setup arg', () => {
    const { stdout, exitCode } = setup('setup')
    expect(stdout.toString()).toBe('Welcome to Pando setup\n')
    expect(exitCode).toBe(0)
  })
})
