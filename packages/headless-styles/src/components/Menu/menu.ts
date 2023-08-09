import { createClassNameProp } from '../../utils/helpers'
import type { DefaultOptions } from '../../utils/types'
import type { MenuButtonOptions, MenuListOptions } from './types'
import './menu.scss'

const MENU = 'pando-menu'

export function getMenuListContainer() {
  return {
    ...createClassNameProp(`${MENU}-list-container`, 'pando_menuListContainer'),
  }
}

export function getMenuButtonProps(options: MenuButtonOptions) {
  return {
    ...createClassNameProp(`${MENU}-button`, ...(options.classNames ?? [])),
    ...(options.expanded ? { 'aria-expanded': true } : {}),
    'aria-haspopup': 'menu' as const,
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
      ...(options.classNames ?? []),
    ),
    'aria-labelledby': options.triggerId,
    id: options.id,
    role: 'menu' as const,
  }
}

export function getMenuListItemProps(options: DefaultOptions) {
  return {
    item: {
      ...createClassNameProp(`${MENU}-list-item`, 'pando_menuListItem'),
      role: 'none' as const,
    },
    content: {
      ...createClassNameProp(
        `${MENU}-list-item-content`,
        'pando_menuListItemContent',
      ),
    },
    component: {
      role: 'menuitem' as const,
      ...createClassNameProp(
        `${MENU}-list-item-link`,
        'pando_menuListItemLink',
        ...(options.classNames ?? []),
      ),
    },
    divider: {
      ...createClassNameProp(
        `${MENU}-list-item-divider`,
        'pando_menuListItemDivider',
      ),
    },
  }
}

/**
 * Menu option item button element styles.
 * @param options.classNames An array of class names to apply to the menu item button element.
 * @returns a className prop for the menu item button element.
 */
export function getMenuButtonStyles(options?: DefaultOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-btn`,
      'pando_menuBtn',
      ...(options?.classNames ?? []),
    ),
  }
}

/**
 * Menu option item description element styles.
 * @param options.classNames An array of class names to apply to the menu item description element.
 * @returns a className prop for the menu item description element.
 */
export function getMenuDescriptionStyles(options?: DefaultOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-description`,
      'pando_menuDescription',
      ...(options?.classNames ?? []),
    ),
  }
}
