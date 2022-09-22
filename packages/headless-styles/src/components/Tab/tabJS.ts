import { tabs } from '@pluralsight/shared'
import { createJSProps, transformStyles } from '../../utils/helpers'
import { createTabProps, getDefaultTabOptions } from './shared'
import styles from './generated/tabCSS.module'
import type { TabOptions } from './types'

export function getJSTabProps(options?: TabOptions) {
  const defaultOptions = getDefaultTabOptions(options)
  const props = createTabProps()
  const sizeClass = `${defaultOptions.size}Tab`
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
      ...styles[sizeClass as keyof typeof styles],
    },
    panelWrapper: styles.tabPanelWrapper,
    tabPanel: styles.tabPanel,
  }

  if (!tabs) {
    return null
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(transformStyles(jsStyles.wrapper), jsStyles.wrapper),
    },
    tabList: {
      ...baseProps.tabList,
      ...createJSProps(transformStyles(jsStyles.tabList), jsStyles.tabList),
    },
    tab: {
      ...baseProps.tab,
      ...createJSProps(transformStyles(jsStyles.tab), jsStyles.tab),
    },
    panelWrapper: {
      ...baseProps.panelWrapper,
      ...createJSProps(
        transformStyles(jsStyles.panelWrapper),
        jsStyles.panelWrapper
      ),
    },
    tabPanel: {
      ...baseProps.tabPanel,
      ...createJSProps(transformStyles(jsStyles.tabPanel), jsStyles.tabPanel),
    },
  }
}
