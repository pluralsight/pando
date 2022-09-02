import type { Tech } from '../types'
import type { MenuOptions } from './types'

export const defaultMenuOptions = {
  label: '',
  isSubmenu: false,
  isSubmenuExpanded: false,
  tech: '' as Tech,
}

export function getDefaultMenuOptions(options?: MenuOptions) {
  return {
    label: options?.label ?? defaultMenuOptions.label,
    isSubmenu: options?.isSubmenu ?? defaultMenuOptions.isSubmenu,
    isSubmenuExpanded:
      options?.isSubmenuExpanded ?? defaultMenuOptions.isSubmenuExpanded,
    tech: options?.tech ?? defaultMenuOptions.tech,
  }
}
