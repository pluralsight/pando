import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultMenuOptions,
  createMenuProps,
  createMenuItemProps,
  getMenuPositionClasses,
  getDefaultMenuItemOptions,
} from './shared'
import type {
  MenuButtonOptions,
  MenuListOptions,
  MenuItemOptions,
  MenuOptions,
} from './types'
import './menuCSS.scss'
import './menuPositioning.scss'

const MENU = 'pando-menu'

export function getMenuWrapperProps() {
  return {
    ...createClassNameProp(`${MENU}-wrapper`, 'pando_menuWrapper'),
  }
}

export function getMenuButtonProps(options: MenuButtonOptions) {
  return {
    ...createClassNameProp(`${MENU}-button`, ...(options.classNames ?? [])),
    ...(options.expanded ? { 'aria-expanded': true } : {}),
    'aria-haspopup': 'menu',
    'aria-controls': options.menuId,
    id: options.id,
    type: 'button' as const,
  }
}

export function getMenuListProps(options: MenuListOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-list`,
      'pando_menu',
      'pando_bottomMenu',
      ...(options.classNames ?? [])
    ),
    'aria-labelledby': options.triggerId,
    id: options.id,
    role: 'menu' as const,
  }
}

// DEPRECATED

export function getMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
  const { menuPositionClass } = getMenuPositionClasses(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${MENU}-wrapper`, 'pando_menuWrapper'),
    },
    menu: {
      ...props.menu,
      ...createClassNameProp(MENU, 'pando_menu', menuPositionClass),
    },
  }
}

export function getMenuItemProps(options?: MenuItemOptions) {
  const defaultOptions = getDefaultMenuItemOptions(options)
  const props = createMenuItemProps(defaultOptions)

  return {
    ...props,
    divider: {
      ...props.divider,
      ...createClassNameProp(`${MENU}-divider`, 'pando_menuDivider'),
    },
    menuItemText: {
      ...props.menuItemText,
      ...createClassNameProp(`${MENU}-text`, 'pando_menuItemText'),
    },
    menuListItem: {
      ...props.menuListItem,
      ...createClassNameProp(`${MENU}-listItem`, 'pando_menuListItem'),
    },
    menuItem: {
      ...props.menuItem,
      ...createClassNameProp(`${MENU}-item`, 'pando_menuItem'),
    },
  }
}
