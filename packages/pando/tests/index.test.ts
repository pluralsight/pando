import { describe, test, expect, spyOn } from 'bun:test'
import { itWorks } from '@pando'

describe('itWorks', () => {
  test('it works', () => {
    const logSpy = spyOn(console, 'log')
    itWorks()
    expect(logSpy).toHaveBeenCalled()
  })
})
