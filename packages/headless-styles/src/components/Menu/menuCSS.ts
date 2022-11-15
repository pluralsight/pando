import { menu } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import { getDefaultMenuOptions, createMenuProps } from './shared'
import type { MenuOptions } from './types'
import styles from './menuCSS.module.css'

const MENU = 'ps-menu'

export function getMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)

  if (!menu) {
    return null
  }

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
