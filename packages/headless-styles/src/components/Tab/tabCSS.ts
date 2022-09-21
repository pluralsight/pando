import { tabs } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import { getDefaultTabOptions, createTabProps } from './shared'
import type { TabOptions } from './types'
import styles from './tabCSS.module.css'

export function getTabProps(options?: TabOptions) {
  const defaultOptions = getDefaultTabOptions(options)
  const props = createTabProps(defaultOptions)
  const sizeClass = `${defaultOptions.size}Tab`

  if (!tabs) {
    return null
  }

  return {
    ...props,
    tabList: {
      ...props.tabList,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-tabList ${styles.tabList}`,
        svelteClass: `tabList`,
      }),
    },
    tab: {
      ...props.tab,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-tab ${styles[sizeClass]}`,
        svelteClass: `tabBase ${sizeClass}`,
      }),
    },
    tabPanel: {
      ...props.tabPanel,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-tabPanel ${styles.tabPanel}`,
        svelteClass: `tabPanel`,
      }),
    },
  }
}
