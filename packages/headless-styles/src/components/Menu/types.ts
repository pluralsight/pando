import type { Tech } from '../types'

export interface MenuOptions {
  isExpanded?: boolean
  kind?: Kind
  label?: string
  tech?: Tech
}

export type Kind = 'menu' | 'submenu'
