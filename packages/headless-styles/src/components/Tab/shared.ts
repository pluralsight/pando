import type { Tech } from '../types'
import type { Size, TabOptions } from './types'

export const defaultTabOptions = {
  id: 'tab',
  panelId: 'tabPanel',
  selected: false,
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultTabOptions(options?: TabOptions) {
  return {
    id: options?.id ?? defaultTabOptions.id,
    panelId: options?.panelId ?? defaultTabOptions.panelId,
    selected: options?.selected ?? defaultTabOptions.selected,
    size: options?.size ?? defaultTabOptions.size,
    tech: options?.tech ?? defaultTabOptions.tech,
  }
}

export function createTabProps(options: Required<TabOptions>) {
  return {
    tabList: {
      role: 'tablist',
    },
    tab: {
      'aria-controls': options.panelId,
      'aria-selected': options.selected,
      id: options.id,
      role: 'tab',
      tabIndex: -1,
    },
    tabPanel: {
      'aria-expanded': options.selected,
      'aria-labelledby': options.id,
      id: options.panelId,
      role: 'tabpanel',
      tabIndex: -1,
    },
  }
}
