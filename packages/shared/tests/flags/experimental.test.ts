import * as flags from '../../src/featureFlags'
import type { Flag } from '../../src/utils/types'

jest.mock('../../src/utils/helpers.ts', () => {
  return {
    createFlag: (flag: Flag) => {
      return 'experimental' === flag
    },
  }
})

describe('experimental feature flags', () => {
  test('should be true for experimental features', () => {
    expect(flags.tabs).toEqual(true)
    expect(flags.tabsHook).toEqual(true)
  })

  test('should be false for next features', () => {
    expect(flags.menu).toEqual(false)
    expect(flags.preloadImgHook).toEqual(false)
  })
})
