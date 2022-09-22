import * as flags from '../../src/featureFlags'
import type { Flag } from '../../src/utils/types'

jest.mock('../../src/utils/helpers.ts', () => {
  return {
    createFlag: (flag: Flag) => {
      return 'next' === flag
    },
  }
})

describe('next feature flags', () => {
  test('should be true for next features', () => {
    expect(flags.menu).toEqual(true)
    expect(flags.preloadImgHook).toEqual(true)
  })

  test('should be false for experimental features', () => {
    expect(flags.tabs).toEqual(false)
    expect(flags.tabsHook).toEqual(false)
  })
})
