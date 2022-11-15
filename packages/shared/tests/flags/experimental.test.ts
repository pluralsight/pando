import * as flags from '../../src/featureFlags'

describe('experimtenal feature flags', () => {
  test('should be true for experimental features', () => {
    expect(flags.grid).toEqual(__EXPERIMENTAL__)
    expect(flags.menuHook).toEqual(__EXPERIMENTAL__)
    expect(flags.submenuHook).toEqual(__EXPERIMENTAL__)
    expect(flags.tabindexHook).toEqual(__EXPERIMENTAL__)
  })
})
