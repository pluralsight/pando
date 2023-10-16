import { describe, test, expect } from 'bun:test'
import { patterns } from '@pluralsight/panda-preset'

describe('patterns', () => {
  test('should have scrollable pattern', () => {
    expect(patterns).toHaveProperty('extend.scrollable')
    expect(patterns.extend.scrollable.description).toEqual(
      'A container that allows for scrolling',
    )
    expect(patterns.extend.scrollable.properties).toEqual({
      direction: { type: 'enum', value: ['horizontal', 'vertical'] },
      hideScrollbar: { type: 'boolean' },
    })
    expect(patterns.extend.scrollable.blocklist).toEqual(['overflow'])
  })
})
