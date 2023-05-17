import { createJSProps } from '../../utils/helpers'
import {
  createTabsProps,
  getDefaultTabsOptions,
  createTabsClasses,
} from './shared'
import type { TabsOptions } from './types'
import styles from './generated/tabsCSS'

export function getJSTabsProps(options?: TabsOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  const props = createTabsProps()
  const { sizeClass } = createTabsClasses(defaultOptions.size)
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
    wrapper: styles.pando_tabWrapper,
    tabList: styles.pando_tabList,
    tab: {
      ...styles[sizeClass],
      "&[aria-selected='true']": styles[`aria_selected_true__${sizeClass}`],
    },
    tabPanel: {
      ...styles.pando_tabPanel,
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
