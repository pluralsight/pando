import type { Tech } from '../types'
import type { Kind, MenuOptions } from './types'

export const defaultMenuOptions = {
  label: 'menu',
  kind: 'menu' as Kind,
  isExpanded: false,
  tech: '' as Tech,
}

export function getDefaultMenuOptions(options?: MenuOptions) {
  return {
    label: options?.label ?? defaultMenuOptions.label,
    kind: options?.kind ?? defaultMenuOptions.kind,
    isExpanded: options?.isExpanded ?? defaultMenuOptions.isExpanded,
    tech: options?.tech ?? defaultMenuOptions.tech,
  }
}

export function isSubmenu(kind: Kind) {
  return kind === 'submenu'
}

export function createMenuProps(options: Required<MenuOptions>) {
  const isSubmenuKind = isSubmenu(options.kind)
  const triggerProps = {
    'aria-haspopup': true,
    'aria-expanded': options.isExpanded,
  }

  return {
    trigger: triggerProps,
    wrapper: {},
    menu: {
      'aria-label': options.label,
      'data-expanded': options.isExpanded,
      role: 'menu',
    },
    menuListItem: {
      role: 'presentation',
    },
    menuItem: {
      ...(isSubmenuKind && triggerProps),
      role: 'menuitem',
      tabIndex: -1,
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
