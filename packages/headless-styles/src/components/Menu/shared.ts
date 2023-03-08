import type { MenuOptions, MenuItemOptions } from './types'

export function getDefaultMenuOptions(
  options?: MenuOptions
): Required<MenuOptions> {
  return {
    isExpanded: options?.isExpanded ?? false,
    label: options?.label ?? 'menu',
    position: options?.position ?? 'bottomStart',
  }
}

export function getDefaultMenuItemOptions(
  options?: MenuItemOptions
): Required<MenuItemOptions> {
  return {
    disabled: options?.disabled ?? false,
  }
}

export function getMenuPositionClasses(options: Required<MenuOptions>) {
  return {
    menuPositionClass: `${options.position}Menu` as const,
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

export function createMenuItemProps(options: MenuItemOptions) {
  return {
    iconOptions: {
      ariaHidden: true,
    },
    divider: {},
    menuListItem: {
      role: 'presentation',
    },
    menuItem: {
      'aria-disabled': options.disabled,
      role: 'menuitem',
      tabIndex: -1,
    },
    menuItemText: {},
  }
}
