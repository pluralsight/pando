import { createJSProps } from '../../utils/helpers'
import {
  createTabsProps,
  getDefaultTabsOptions,
  createTabsClasses,
} from './shared'
import type { TabsOptions } from './types'
import styles from './generated/tabsCSS.module'

export function getJSTabsProps(options?: TabsOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  const props = createTabsProps()
  const { sizeClass } = createTabsClasses<typeof styles>(defaultOptions.size)
  const baseProps = {
    ...props,
    wrapper: {
      a11yProps: props.wrapper,
    },
    tabList: {
      a11yProps: props.tabList,
    },
    tab: {
      a11yProps: props.tab,
    },
    panelWrapper: {
      a11yProps: props.panelWrapper,
    },
    tabPanel: {
      a11yProps: props.tabPanel,
    },
  }
  const jsStyles = {
    wrapper: styles.tabWrapper,
    tabList: styles.tabList,
    tab: {
      ...styles.tabBase,
      ...styles[sizeClass],
      "&[aria-selected='true']::after":
        styles.tabBase_aria_selected__true['&::after'],
    },
    tabPanel: {
      ...styles.tabPanel,
    },
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(jsStyles.wrapper),
    },
    tabList: {
      ...baseProps.tabList,
      ...createJSProps(jsStyles.tabList),
    },
    tab: {
      ...baseProps.tab,
      ...createJSProps(jsStyles.tab),
    },
    tabPanel: {
      ...baseProps.tabPanel,
      ...createJSProps(jsStyles.tabPanel),
    },
  }
}
