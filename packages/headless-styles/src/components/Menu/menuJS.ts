import { createJSProps } from '../../utils/helpers'
import {
  createMenuProps,
  getDefaultMenuOptions,
  createMenuItemProps,
} from './shared'
import type { MenuOptions } from './types'
import styles from './generated/menuCSS.module'

export function getJSMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
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
      ...styles.menu,
    },
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(styles.menuWrapper),
    },
    menu: {
      ...baseProps.menu,
      ...createJSProps(jsStyles.menu),
      keyframes: {
        ...createJSProps(styles.keyframesFadeIn),
      },
    },
  }
}

export function getJSMenuItemProps() {
  const props = createMenuItemProps()

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
      ...styles.menuListItem,
      ...styles.menuListItem____menuListItem,
    },
    menuItem: {
      ...styles.menuItem,
      '& > *': styles.menuItem___all_children,
      '& > svg': styles.menuItem___svg,
    },
  }

  return {
    ...baseProps,
    divider: {
      ...baseProps.menuListItem,
      ...createJSProps(styles.menuDivider),
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
      ...createJSProps(styles.menuItemText),
    },
  }
}
