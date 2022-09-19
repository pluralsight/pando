import type { Tech } from '../types'

export interface MenuOptions {
  isSubmenuExpanded?: boolean
  kind?: Kind
  label?: string
  tech?: Tech
}

export type Kind = 'menu' | 'submenu'
