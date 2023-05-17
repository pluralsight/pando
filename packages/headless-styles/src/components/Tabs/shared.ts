import type { TabsSize, TabsOptions } from './types'

export function getDefaultTabsOptions(options?: TabsOptions) {
  return {
    size: options?.size ?? 'm',
  }
}

export function createTabsClasses(size: TabsSize) {
  return {
    sizeClass: `pando_${size}Tab` as const,
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
      'aria-expanded': true,
      'aria-hidden': false,
      role: 'tabpanel',
    },
    panelWrapper: {},
    wrapper: {},
  }
}
