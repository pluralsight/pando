import { menu } from '@pluralsight/shared'
import { createJSProps, transformStyles } from '../../utils/helpers'
import { createMenuProps, getDefaultMenuOptions, isSubmenu } from './shared'
import styles from './generated/menuCSS.module'
import type { MenuOptions } from './types'

export function getJSMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const isSubmenuKind = isSubmenu(defaultOptions.kind)
  const props = createMenuProps(defaultOptions)
  const baseProps = {
    ...props,
    menu: {
      a11yProps: props.menu,
    },
    menuListItem: {
      a11yProps: props.menuListItem,
    },
    firstMenuItem: {
      a11yProps: props.firstMenuItem,
    },
    menuItem: {
      a11yProps: props.menuItem,
    },
  }
  const jsStyles = {
    menu: {
      ...styles.menu,
      ...(isSubmenuKind && styles.menuItem____menu),
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
      ...(isSubmenuKind && styles.menuItem_aria_haspopup__true),
      ...(defaultOptions.isSubmenuExpanded &&
        styles.menuItem_aria_expanded__true),
    },
  }

  if (!menu) {
    return null
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
    firstMenuItem: {
      ...baseProps.firstMenuItem,
      ...createJSProps(transformStyles(jsStyles.menuItem), jsStyles.menuItem),
    },
    menuItem: {
      ...baseProps.menuItem,
      ...createJSProps(transformStyles(jsStyles.menuItem), jsStyles.menuItem),
    },
  }
}
