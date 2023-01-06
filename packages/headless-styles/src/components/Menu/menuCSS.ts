import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultMenuOptions,
  createMenuProps,
  createMenuItemProps,
  getMenuClasses,
} from './shared'
import type { MenuOptions } from './types'
import styles from './menuCSS.module.css'

const MENU = 'ps-menu'

export function getMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
  const { menuPositionClass } = getMenuClasses<typeof styles>(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${MENU}-wrapper ${styles.menuWrapper}`),
    },
    menu: {
      ...props.menu,
      ...createClassNameProp(
        `${MENU} ${styles.menu} ${styles[menuPositionClass]}`
      ),
    },
  }
}

export function getMenuItemProps() {
  const props = createMenuItemProps()

  return {
    ...props,
    divider: {
      ...props.divider,
      ...createClassNameProp(`${MENU}-divider ${styles.menuDivider}`),
    },
    menuItemText: {
      ...props.menuItemText,
      ...createClassNameProp(`${MENU}-text ${styles.menuItemText}`),
    },
    menuListItem: {
      ...props.menuListItem,
      ...createClassNameProp(`${MENU}-listItem ${styles.menuListItem}`),
    },
    menuItem: {
      ...props.menuItem,
      ...createClassNameProp(`${MENU}-item ${styles.menuItem}`),
    },
  }
}
