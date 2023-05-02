import { getTabsProps } from '../../src'

describe('Tab CSS', () => {
  const baseClass = 'ps-tabs'
  const defaultResult = {
    wrapper: {
      className: `${baseClass}-wrapper tabWrapper`,
    },
    tabList: {
      className: `${baseClass}-list tabList`,
      role: 'tablist',
      tabIndex: 0,
    },
    tab: {
      'aria-selected': false,
      className: `${baseClass} mTab`,
      role: 'tab',
      tabIndex: -1,
    },
    panelWrapper: {},
    tabPanel: {
      'aria-expanded': true,
      'aria-hidden': false,
      className: `${baseClass}-tabPanel tabPanel`,
      role: 'tabpanel',
    },
  }

  test('should accept no options', () => {
    expect(getTabsProps()).toEqual(defaultResult)
  })

  test('should accept a small size option', () => {
    expect(getTabsProps({ size: 's' })).toEqual({
      ...defaultResult,
      tab: {
        ...defaultResult.tab,
        className: `${baseClass} sTab`,
      },
    })
  })
})
