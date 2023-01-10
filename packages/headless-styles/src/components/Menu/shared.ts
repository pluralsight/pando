import type { MenuOptions } from './types'
import type { StyleKey } from '../types'

export function getDefaultMenuOptions(options?: MenuOptions) {
  return {
    isExpanded: options?.isExpanded ?? false,
    label: options?.label ?? 'menu',
    position: options?.position ?? 'bottomStart',
  }
}

interface MenuStyleKeys<SM> {
  menuPositionClass: StyleKey<SM>
}

export function getMenuPositionClasses<StyleModule>(
  options: Required<MenuOptions>
): MenuStyleKeys<StyleModule> {
  return {
    menuPositionClass: `${options.position}Menu` as StyleKey<StyleModule>,
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
