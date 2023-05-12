import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
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
    menuPositionClass: `pando_${options.position}Menu` as const,
  }
}

function createMenuIconOptions() {
  return {
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
    }),
  }
}

export function createMenuProps(options: MenuOptions) {
  const triggerProps = {
    'aria-haspopup': true,
    'aria-expanded': options.isExpanded,
  }

  return {
    ...createMenuIconOptions(),
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
    ...createMenuIconOptions(),
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
