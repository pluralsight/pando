import type { DefaultOptions } from '../../utils/types'
import type { Position } from '../types'

export interface MenuButtonOptions extends DefaultOptions {
  expanded: boolean
  menuId: string
  id: string
}

export interface MenuListOptions extends DefaultOptions {
  id: string
  triggerId: string
}

// DEPRECATED
export interface MenuOptions {
  isExpanded?: boolean
  label?: string
  position?: Position
}

export interface MenuItemOptions {
  disabled?: boolean
}
