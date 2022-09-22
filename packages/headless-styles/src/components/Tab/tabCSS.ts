import { tabs } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import { getDefaultTabOptions, createTabProps } from './shared'
import type { TabOptions } from './types'
import styles from './tabCSS.module.css'

const TAB = 'ps-tab'

export function getTabProps(options?: TabOptions) {
  const defaultOptions = getDefaultTabOptions(options)
  const props = createTabProps()
  const sizeClass = `${defaultOptions.size}Tab`

  if (!tabs) {
    return null
  }

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${TAB}-wrapper ${styles.tabWrapper}`,
        svelteClass: `tabWrapper`,
      }),
    },
    tabList: {
      ...props.tabList,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${TAB}-list ${styles.tabList}`,
        svelteClass: `tabList`,
      }),
    },
    tab: {
      ...props.tab,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${TAB} ${styles[sizeClass]}`,
        svelteClass: `tabBase ${sizeClass}`,
      }),
    },
    panelWrapper: {
      ...props.panelWrapper,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${TAB}-panelWrapper ${styles.tabPanelWrapper}`,
        svelteClass: `tabPanelWrapper`,
      }),
    },
    tabPanel: {
      ...props.tabPanel,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `${TAB}-tabPanel ${styles.tabPanel}`,
        svelteClass: `tabPanel`,
      }),
    },
  }
}
