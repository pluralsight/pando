import { getTabProps } from '../../src'

describe('Tab CSS', () => {
  const baseClass = 'ps-tab'
  const defaultResult = {
    wrapper: {
      className: `${baseClass}-wrapper tabWrapper`,
    },
    tabList: {
      className: `${baseClass}-list tabList`,
      role: 'tablist',
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
    expect(getTabProps()).toEqual(defaultResult)
  })

  test('should accept a small size option', () => {
    expect(getTabProps({ size: 's' })).toEqual({
      ...defaultResult,
      tab: {
        ...defaultResult.tab,
        className: `${baseClass} sTab`,
      },
    })
  })
})
