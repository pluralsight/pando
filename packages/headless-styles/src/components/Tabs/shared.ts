import type { TabsOptions } from './types'

export function getDefaultTabsOptions(options?: TabsOptions) {
  return {
    classNames: options?.classNames ?? [],
  }
}

export function createTabsProps() {
  return {
    tabList: {
      role: 'tablist',
      tabIndex: 0,
    },
    tab: {
      'aria-selected': false,
      role: 'tab',
      tabIndex: -1,
    },
    tabPanel: {
      'aria-hidden': false,
      role: 'tabpanel',
    },
  }
}
