import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultMenuOptions,
  createMenuProps,
  createMenuItemProps,
  getMenuPositionClasses,
  getDefaultMenuItemOptions,
} from './shared'
import type { MenuItemOptions, MenuOptions } from './types'
import styles from './menuCSS.module.css'
import positionStyles from './menuPositioning.module.css'

const MENU = 'ps-menu'

export function getMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
  const { menuPositionClass } = getMenuPositionClasses(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${MENU}-wrapper`, styles.menuWrapper),
    },
    menu: {
      ...props.menu,
      ...createClassNameProp(
        MENU,
        styles.menu,
        positionStyles[menuPositionClass]
      ),
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
      ...createClassNameProp(`${MENU}-divider`, styles.menuDivider),
    },
    menuItemText: {
      ...props.menuItemText,
      ...createClassNameProp(`${MENU}-text`, styles.menuItemText),
    },
    menuListItem: {
      ...props.menuListItem,
      ...createClassNameProp(`${MENU}-listItem`, styles.menuListItem),
    },
    menuItem: {
      ...props.menuItem,
      ...createClassNameProp(`${MENU}-item`, styles.menuItem),
    },
  }
}
