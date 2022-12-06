import type { StyleKey } from '../types'
import type { TabSize, TabOptions } from './types'

export function getDefaultTabOptions(options?: TabOptions) {
  return {
    size: options?.size ?? 'm',
  }
}

interface TabStyleKeys<SM> {
  sizeClass: StyleKey<SM>
}

export function createTabClasses<StyleModule>(
  size: TabSize
): TabStyleKeys<StyleModule> {
  return {
    sizeClass: `${size}Tab` as StyleKey<StyleModule>,
  }
}

export function createTabProps() {
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
