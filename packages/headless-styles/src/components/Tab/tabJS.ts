import { createJSProps } from '../../utils/helpers'
import { createTabProps, getDefaultTabOptions, getTabClasses } from './shared'
import styles from './generated/tabCSS.module'
import type { TabOptions } from './types'

export function getJSTabProps(options?: TabOptions) {
  const defaultOptions = getDefaultTabOptions(options)
  const props = createTabProps()
  const { sizeClass } = getTabClasses(defaultOptions.size)
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
      ...styles[sizeClass as keyof typeof styles],
      "&[aria-selected='true']": styles.tabBase_aria_selected__true,
      "&[aria-selected='true']::after":
        styles.tabBase_aria_selected__true['&::after'],
    },
    tabPanel: {
      ...styles.tabPanel,
      "&[aria-hidden='true']": styles.tabPanel_aria_hidden__true,
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
