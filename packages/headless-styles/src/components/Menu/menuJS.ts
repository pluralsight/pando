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
    menuItem: {
      a11yProps: props.menuItem,
    },
    trigger: {
      a11yProps: props.trigger,
    },
  }
  const jsStyles = {
    menu: {
      ...styles.menu,
      ...(isSubmenuKind && styles.menuItem____menu),
      '&[data-expanded="true"]': styles.menu_data_expanded__true,
    },
    menuListItem: {
      ...styles.menuListItem,
      ...styles.menuListItem____menuListItem,
    },
    menuItem: {
      ...styles.menuItem,
      '& > *': styles.menuItem___all_children,
      '& > svg': styles.menuItem___svg,
      '&[aria-expanded="true"]': styles.menuItem_aria_expanded__true,
      '&[aria-haspopup="true"]': styles.menuItem_aria_haspopup__true,
      ...(isSubmenuKind && styles.menuItem_aria_haspopup__true),
    },
  }

  if (!menu) {
    return null
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(transformStyles(styles.menuWrapper), styles.menuWrapper),
    },
    menu: {
      ...baseProps.menu,
      ...createJSProps(transformStyles(jsStyles.menu), jsStyles.menu),
      keyframes: {
        ...createJSProps(
          transformStyles(styles.keyframesFadeIn),
          styles.keyframesFadeIn
        ),
      },
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
