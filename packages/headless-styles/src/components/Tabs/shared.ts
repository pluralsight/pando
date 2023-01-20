import type { StyleKey } from '../types'
import type { TabsSize, TabsOptions } from './types'

export function getDefaultTabsOptions(options?: TabsOptions) {
  return {
    size: options?.size ?? 'm',
  }
}

interface TabStyleKeys<SM> {
  sizeClass: StyleKey<SM>
}

export function createTabsClasses<StyleModule>(
  size: TabsSize
): TabStyleKeys<StyleModule> {
  return {
    sizeClass: `${size}Tab` as StyleKey<StyleModule>,
  }
}

export function createTabsProps() {
  return {
    tabList: {
      role: 'tablist',
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
