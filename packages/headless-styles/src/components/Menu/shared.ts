import type { MenuOptions } from './types'

export function getDefaultMenuOptions(options?: MenuOptions) {
  return {
    label: options?.label ?? 'menu',
    isExpanded: options?.isExpanded ?? false,
  }
}

export function createMenuProps(options: MenuOptions) {
  const triggerProps = {
    'aria-haspopup': true,
    'aria-expanded': options.isExpanded,
  }

  return {
    iconOptions: {
      ariaHidden: true,
    },
    wrapper: {},
    menu: {
      'aria-label': options.label,
      'data-expanded': options.isExpanded,
      role: 'menu',
    },
    trigger: triggerProps,
  }
}

export function createMenuItemProps() {
  return {
    iconOptions: {
      ariaHidden: true,
    },
    divider: {},
    menuListItem: {
      role: 'presentation',
    },
    menuItem: {
      role: 'menuitem',
      tabIndex: -1,
    },
    menuItemText: {},
  }
}
