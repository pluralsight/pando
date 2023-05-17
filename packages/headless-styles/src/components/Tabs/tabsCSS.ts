import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultTabsOptions,
  createTabsProps,
  createTabsClasses,
} from './shared'
import type { TabsOptions } from './types'
import './tabsCSS.scss'

const TAB = 'pando-tabs'

export function getTabsProps(options?: TabsOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  const props = createTabsProps()
  const { sizeClass } = createTabsClasses(defaultOptions.size)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${TAB}-wrapper`, 'pando_tabWrapper'),
    },
    tabList: {
      ...props.tabList,
      ...createClassNameProp(`${TAB}-list`, 'pando_tabList'),
    },
    tab: {
      ...props.tab,
      ...createClassNameProp(TAB, sizeClass),
    },
    tabPanel: {
      ...props.tabPanel,
      ...createClassNameProp(`${TAB}-tabPanel`, 'pando_tabPanel'),
    },
  }
}
