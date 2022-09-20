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

export function isSubmenu(kind: Kind) {
  return kind === 'submenu'
}

export function createMenuProps(options: Required<MenuOptions>) {
  const isSubmenuKind = isSubmenu(options.kind)
  const menuItemProps = {
    ...(isSubmenuKind && {
      'aria-haspopup': true,
      'aria-expanded': options.isSubmenuExpanded,
    }),
    role: 'menuitem',
    tabIndex: -1,
  }

  return {
    menu: {
      'aria-label': options.label,
      role: 'menu',
    },
    menuListItem: {
      role: 'presentation',
    },
    firstMenuItem: {
      ...menuItemProps,
      tabIndex: 0,
    },
    menuItem: {
      ...menuItemProps,
    },
    ...(isSubmenuKind && {
      iconOptions: {
        ariaHidden: true,
        size: 'l',
        tech: options.tech,
      },
    }),
  }
}
