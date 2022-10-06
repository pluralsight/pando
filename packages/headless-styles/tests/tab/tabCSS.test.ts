import { getTabProps } from '../../src'

jest.mock('@pluralsight/shared', () => {
  return {
    tabs: true,
  }
})

describe('Tab CSS - getTabProps', () => {
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

  test('should accept a tech type', () => {
    expect(getTabProps({ tech: 'svelte' })).toEqual({
      ...defaultResult,
      wrapper: {
        class: 'tabWrapper',
      },
      tabList: {
        class: 'tabList',
        role: 'tablist',
      },
      tab: {
        'aria-selected': false,
        class: 'tabBase mTab',
        role: 'tab',
        tabIndex: -1,
      },
      panelWrapper: {},
      tabPanel: {
        'aria-expanded': true,
        'aria-hidden': false,
        class: 'tabPanel',
        role: 'tabpanel',
      },
    })
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
