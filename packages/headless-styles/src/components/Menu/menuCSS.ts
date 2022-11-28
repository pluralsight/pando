import { createClassProp } from '../../utils/helpers'
import {
  getDefaultMenuOptions,
  getDefaultMenuItemOptions,
  createMenuProps,
  createMenuItemProps,
} from './shared'
import type { MenuOptions, MenuItemOptions } from './types'
import styles from './menuCSS.module.css'

const MENU = 'ps-menu'

export function getMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${MENU}-wrapper ${styles.menuWrapper}`,
        svelteClass: `${MENU}-wrapper menuWrapper`,
      }),
    },
    menu: {
      ...props.menu,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${MENU} ${styles.menu}`,
        svelteClass: `${MENU} menu`,
      }),
    },
  }
}

export function getMenuItemProps(options?: MenuItemOptions) {
  const defaultOptions = getDefaultMenuItemOptions(options)
  const props = createMenuItemProps(defaultOptions)

  return {
    ...props,
    menuListItem: {
      ...props.menuListItem,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${MENU}-listItem ${styles.menuListItem}`,
        svelteClass: `${MENU}-listItem menuListItem`,
      }),
    },
    menuItem: {
      ...props.menuItem,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${MENU}-item ${styles.menuItem}`,
        svelteClass: `${MENU}-item menuItem`,
      }),
    },
  }
}
