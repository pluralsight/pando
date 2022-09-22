import type { Tech } from '../types'
import type { Size, TabOptions } from './types'

export const defaultTabOptions = {
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultTabOptions(options?: TabOptions) {
  return {
    size: options?.size ?? defaultTabOptions.size,
    tech: options?.tech ?? defaultTabOptions.tech,
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
