import * as flags from '../../src/featureFlags'

describe('experimtenal feature flags', () => {
  test('should be true for experimental features', () => {
    expect(flags.popover).toEqual(__EXPERIMENTAL__)
  })
})
