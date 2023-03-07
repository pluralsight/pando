import { Position } from '../types'

export interface MenuOptions {
  isExpanded?: boolean
  label?: string
  position?: Position
}

export interface MenuItemOptions {
  disabled?: boolean
}
