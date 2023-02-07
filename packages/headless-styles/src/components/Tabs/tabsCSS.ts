import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultTabsOptions,
  createTabsProps,
  createTabsClasses,
} from './shared'
import type { TabsOptions } from './types'
import styles from './tabsCSS.module.css'

const TAB = 'ps-tabs'

export function getTabsProps(options?: TabsOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  const props = createTabsProps()
  const { sizeClass } = createTabsClasses<typeof styles>(defaultOptions.size)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${TAB}-wrapper`, styles.tabWrapper),
    },
    tabList: {
      ...props.tabList,
      ...createClassNameProp(`${TAB}-list`, styles.tabList),
    },
    tab: {
      ...props.tab,
      ...createClassNameProp(TAB, styles[sizeClass]),
    },
    tabPanel: {
      ...props.tabPanel,
      ...createClassNameProp(`${TAB}-tabPanel`, styles.tabPanel),
    },
  }
}
