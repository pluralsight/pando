import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultTabOptions,
  createTabProps,
  createTabClasses,
} from './shared'
import type { TabOptions } from './types'
import styles from './tabCSS.module.css'

const TAB = 'ps-tab'

export function getTabProps(options?: TabOptions) {
  const defaultOptions = getDefaultTabOptions(options)
  const props = createTabProps()
  const { sizeClass } = createTabClasses<typeof styles>(defaultOptions.size)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${TAB}-wrapper ${styles.tabWrapper}`),
    },
    tabList: {
      ...props.tabList,
      ...createClassNameProp(`${TAB}-list ${styles.tabList}`),
    },
    tab: {
      ...props.tab,
      ...createClassNameProp(`${TAB} ${styles[sizeClass]}`),
    },
    tabPanel: {
      ...props.tabPanel,
      ...createClassNameProp(`${TAB}-tabPanel ${styles.tabPanel}`),
    },
  }
}
