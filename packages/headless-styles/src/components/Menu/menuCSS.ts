import { menu } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import { getDefaultMenuOptions, createMenuProps } from './shared'
import type { MenuOptions } from './types'
import styles from './menuCSS.module.css'

export function getMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)

  if (!menu) {
    return null
  }

  return {
    ...props,
    menu: {
      ...props.menu,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-menu ${styles.menu}`,
        svelteClass: `menu`,
      }),
    },
    menuListItem: {
      ...props.menuListItem,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-menu-listItem ${styles.menuListItem}`,
        svelteClass: `menuListItem`,
      }),
    },
    firstMenuItem: {
      ...props.firstMenuItem,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-menu-item ${styles.menuItem}`,
        svelteClass: `menuItem`,
      }),
    },
    menuItem: {
      ...props.menuItem,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-menu-item ${styles.menuItem}`,
        svelteClass: `menuItem`,
      }),
    },
  }
}
