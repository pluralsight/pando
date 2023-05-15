import { createJSProps } from '../../utils/helpers'
import type { MenuOptions, MenuItemOptions } from './types'
import {
  createMenuProps,
  getDefaultMenuOptions,
  getDefaultMenuItemOptions,
  createMenuItemProps,
  getMenuPositionClasses,
} from './shared'
import styles from './generated/menuCSS'
import positionStyles from './generated/menuPositioning'

export function getJSMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
  const { menuPositionClass } = getMenuPositionClasses(defaultOptions)

  const baseProps = {
    ...props,
    menu: {
      a11yProps: props.menu,
    },
    trigger: {
      a11yProps: props.trigger,
    },
  }
  const jsStyles = {
    menu: {
      ...positionStyles[menuPositionClass],
      ...styles.pando_menu,
    },
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(styles.pando_menuWrapper),
    },
    menu: {
      ...baseProps.menu,
      ...createJSProps(jsStyles.menu),
      keyframes: {
        ...createJSProps(styles.keyframesPopInAnimation),
      },
    },
  }
}

export function getJSMenuItemProps(options?: MenuItemOptions) {
  const defaultOptions = getDefaultMenuItemOptions(options)
  const props = createMenuItemProps(defaultOptions)

  const baseProps = {
    ...props,
    menuListItem: {
      a11yProps: props.menuListItem,
    },
    menuItem: {
      a11yProps: props.menuItem,
    },
  }

  const jsStyles = {
    menuListItem: {
      ...styles.pando_menuListItem,
      ...styles.pando_menuListItem____pando_menuListItem,
    },
    menuItem: {
      ...styles.pando_menuItem,
      '& > *': styles.pando_menuItem___all_children,
      '& > svg': styles.pando_menuItem___svg,
    },
  }

  return {
    ...baseProps,
    divider: {
      ...baseProps.menuListItem,
      ...createJSProps(styles.pando_menuDivider),
    },
    menuListItem: {
      ...baseProps.menuListItem,
      ...createJSProps(jsStyles.menuListItem),
    },
    menuItem: {
      ...baseProps.menuItem,
      ...createJSProps(jsStyles.menuItem),
    },
    menuItemText: {
      ...baseProps.menuItemText,
      ...createJSProps(styles.pando_menuItemText),
    },
  }
}
