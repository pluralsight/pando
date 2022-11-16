import * as flags from '../../src/featureFlags'

describe('stable feature flags', () => {
  test('should be true for stable features', () => {
    expect(flags.dateHook).toEqual(true)
    expect(flags.menu).toEqual(true)
    expect(flags.menuHook).toEqual(true)
    expect(flags.modal).toEqual(true)
    expect(flags.pagination).toEqual(true)
    expect(flags.preloadImgHook).toEqual(true)
    expect(flags.select).toEqual(true)
    expect(flags.submenuHook).toEqual(true)
    expect(flags.table).toEqual(true)
    expect(flags.tabs).toEqual(true)
    expect(flags.tabsHook).toEqual(true)
    expect(flags.tabindexHook).toEqual(true)
  })
})
