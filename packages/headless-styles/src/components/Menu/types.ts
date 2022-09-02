import type { Tech } from '../types'

export interface MenuOptions {
  label?: string
  isSubmenu?: boolean
  isSubmenuExpanded?: boolean
  tech?: Tech
}
