import { createClassNameProp } from '../../utils/helpers'
import type { DefaultOptions } from '../../utils/types'
import './menu.scss'

const MENU = 'pando-menu'

export function getMenuListItemProps(options: DefaultOptions) {
  return {
    component: {
      role: 'menuitem' as const,
      ...createClassNameProp(
        `${MENU}-list-item-link`,
        'pando_menuListItemLink',
        ...(options.classNames ?? []),
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

/**
 * Menu container element styles.
 * @param options.classNames An array of class names to apply to the menu container div element.
 * @returns a className prop for the menu container element.
 */
export function getMenuListContainerStyles(options?: DefaultOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-list-container`,
      'pando_menuListContainer',
      ...(options?.classNames ?? []),
    ),
  }
}

/**
 * Menu list element styles.
 * @param options.classNames An array of class names to apply to the menu list element.
 * @returns a className prop for the menu list element.
 */
export function getMenuListStyles(options: DefaultOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-list`,
      'pando_menu',
      ...(options.classNames ?? []),
    ),
  }
}

/**
 * Menu option item element styles.
 * @param options.classNames An array of class names to apply to the menu item element.
 * @returns a className prop for the menu item element.
 */
export function getMenuListItemStyles(options?: DefaultOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-list-item`,
      'pando_menuListItem',
      ...(options?.classNames ?? []),
    ),
  }
}

/**
 * Menu option item content styles.
 * @param options.classNames An array of class names to apply to the menu item element.
 * @returns a className prop for the menu item content element.
 */
export function getMenuListItemContentStyles(options?: DefaultOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-list-item-content`,
      'pando_menuListItemContent',
      ...(options?.classNames ?? []),
    ),
  }
}

/**
 * Menu option item divider element styles.
 * @param options.classNames An array of class names to apply to the menu item divider element.
 * @returns a className prop for the menu item divider element.
 */
export function getMenuDividerStyles(options?: DefaultOptions) {
  return {
    ...createClassNameProp(
      `${MENU}-list-item-divider`,
      'pando_menuListItemDivider',
      ...(options?.classNames ?? []),
    ),
  }
}
