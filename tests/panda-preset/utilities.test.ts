import { describe, test, expect } from 'bun:test'
import { utilities } from '@pluralsight/panda-preset'

describe('utilities', () => {
  test('should have a spacing utility', () => {
    expect(utilities).toHaveProperty('extend.pxi')
    expect(utilities.extend.pxi.className).toEqual('padding-inline')
    expect(utilities.extend.pxi.values).toEqual('spacing')
    expect(utilities.extend.pxi.transform(4)).toEqual({
      paddingInlineStart: 4,
      paddingInlineEnd: 4,
    })
  })
})
