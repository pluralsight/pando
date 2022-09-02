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

export function createMenuProps(options: MenuOptions) {
  return {
    menu: {
      'aria-label': options.label,
      role: 'menu',
    },
    menuListItem: {
      role: 'presentation',
    },
    menuItem: {
      role: 'menuitem',
      'aria-haspopup': options.isSubmenu,
      'aria-expanded': options.isSubmenuExpanded,
    },
    iconOptions: {
      ariaHidden: true,
      size: 'l',
      tech: options.tech,
    },
  }
}
