import * as flags from '../src/featureFlags'

describe('next feature flags', () => {
  beforeEach(() => {
    process.env.RELEASE_CHANNEL = 'next'
  })

  afterEach(() => {
    process.env.RELEASE_CHANNEL = ''
  })

  test('should be true for next features', () => {
    expect(flags.menu).toEqual(true)
  })

  test('should be false for experimental features', () => {
    expect(flags.preloadImgHook).toEqual(false)
  })
})
