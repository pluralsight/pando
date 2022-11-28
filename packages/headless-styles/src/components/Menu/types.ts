import type { Tech } from '../types'

export interface MenuOptions {
  isExpanded?: boolean
  label?: string
  tech?: Tech
}

export interface MenuItemOptions {
  tech?: Tech
}
