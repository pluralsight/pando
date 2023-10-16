import { describe, test, expect } from 'bun:test'
import { setup } from './helpers'

describe('pando update', () => {
  test('should execute the cli with the update arg', () => {
    const { stdout, exitCode } = setup()
    expect(stdout.toString()).toBe('Welcome to Pando update\n')
    expect(exitCode).toBe(0)
  })
})
