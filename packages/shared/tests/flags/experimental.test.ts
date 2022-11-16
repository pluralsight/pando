import * as flags from '../../src/featureFlags'

describe('experimtenal feature flags', () => {
  test('should be true for experimental features', () => {
    expect(flags.grid).toEqual(__EXPERIMENTAL__)
  })
})
