import { createJSProps, transformStyles } from '../../utils/helpers'
import type { StyleProps } from '../../utils/helpers'
import { createMenuProps, getDefaultMenuOptions } from './shared'
import styles from './generated/menuCSS.module'
import type { MenuOptions } from './types'

interface MenuJSProps {
  menu: {
    a11yProps: {
      'aria-label'?: string
      role: string
    }
    cssProps?: string
    styles?: StyleProps
  }
  menuListItem: {
    a11yProps: {
      role: string
    }
    cssProps?: string
    styles?: StyleProps
  }
  menuItem: {
    a11yProps: {
      role: string
      'aria-haspopup'?: boolean
      'aria-expanded'?: boolean
    }
    cssProps?: string
    styles?: StyleProps
  }
}

export function UNSAFE_getJSMenuProps(options?: MenuOptions): MenuJSProps {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
  const baseProps = {
    ...props,
    menu: {
      a11yProps: props.menu,
    },
    menuListItem: {
      a11yProps: props.menuListItem,
    },
    menuItem: {
      a11yProps: props.menuItem,
    },
  }
  const jsStyles = {
    menu: {
      ...styles.menu,
      ...(defaultOptions.isSubmenu && styles.menuItem____menu),
      ...(defaultOptions.isSubmenuExpanded &&
        styles.menuItem_aria_expanded__true______menu),
    },
    menuListItem: {
      ...styles.menuListItem,
      ...styles.menuListItem____menuListItem,
    },
    menuItem: {
      ...styles.menuItem,
      '& > *': styles.menuItem___all_children,
      '& > svg': styles.menuItem___svg,
      ...(defaultOptions.isSubmenu && styles.menuItem_aria_haspopup__true),
      ...(defaultOptions.isSubmenuExpanded &&
        styles.menuItem_aria_expanded__true),
    },
  }

  if (!process.env.MENU_API) {
    return baseProps
  }

  return {
    ...baseProps,
    menu: {
      ...baseProps.menu,
      ...createJSProps(transformStyles(jsStyles.menu), jsStyles.menu),
    },
    menuListItem: {
      ...baseProps.menuListItem,
      ...createJSProps(
        transformStyles(jsStyles.menuListItem),
        jsStyles.menuListItem
      ),
    },
    menuItem: {
      ...baseProps.menuItem,
      ...createJSProps(transformStyles(jsStyles.menuItem), jsStyles.menuItem),
    },
  }
}
