import type { Tech } from '../types'
import type { MenuOptions, MenuItemOptions } from './types'

const tech = '' as Tech

const defaultMenuOptions = {
  label: 'menu',
  isExpanded: false,
  tech,
}

const defaultMenuItemOptions = {
  tech,
}

export function getDefaultMenuOptions(options?: MenuOptions) {
  return {
    label: options?.label ?? defaultMenuOptions.label,
    isExpanded: options?.isExpanded ?? defaultMenuOptions.isExpanded,
    tech: options?.tech ?? defaultMenuOptions.tech,
  }
}

export function getDefaultMenuItemOptions(options?: MenuItemOptions) {
  return {
    tech: options?.tech ?? defaultMenuItemOptions.tech,
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
      tech: options.tech,
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
      tech: options.tech,
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
