import * as flags from '../src/featureFlags'

describe('experimental feature flags', () => {
  beforeEach(() => {
    process.env.RELEASE_CHANNEL = 'experimental'
  })

  afterEach(() => {
    process.env.RELEASE_CHANNEL = ''
  })

  test('should be true for experimental features', () => {
    expect(flags.preloadImgHook).toEqual(true)
  })

  test('should be false for next features', () => {
    expect(flags.menu).toEqual(false)
  })
})
