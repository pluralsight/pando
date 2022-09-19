import type { Tech } from '../types'
import type { Kind, MenuOptions } from './types'

export const defaultMenuOptions = {
  label: '',
  kind: 'menu' as Kind,
  isSubmenuExpanded: false,
  tech: '' as Tech,
}

export function getDefaultMenuOptions(options?: MenuOptions) {
  return {
    label: options?.label ?? defaultMenuOptions.label,
    kind: options?.kind ?? defaultMenuOptions.kind,
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
      'aria-haspopup': options.kind === 'submenu',
      'aria-expanded': options.isSubmenuExpanded,
    },
    iconOptions: {
      ariaHidden: true,
      size: 'l',
      tech: options.tech,
    },
  }
}
