import { createClassNameProp } from '../../utils/helpers'
import type { DefaultOptions } from '../../utils/types'
import { getDefaultTabsOptions } from './shared'
import './tabs.scss'

const TAB = 'pando-tabs'

export function getTabWrapperStyles(options: DefaultOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  return {
    ...createClassNameProp(
      `${TAB}-wrapper`,
      'pando_tabWrapper',
      ...defaultOptions.classNames,
    ),
  }
}

export function getTabListStyles(options: DefaultOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  return {
    ...createClassNameProp(
      `${TAB}-list`,
      'pando_tabList',
      ...defaultOptions.classNames,
    ),
  }
}

export function getTabStyles(options: DefaultOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  return {
    ...createClassNameProp(
      `${TAB}-tab`,
      'pando_tab',
      ...defaultOptions.classNames,
    ),
  }
}

export function getTabPanelStyles(options: DefaultOptions) {
  const defaultOptions = getDefaultTabsOptions(options)
  return {
    ...createClassNameProp(
      `${TAB}-panel`,
      'pando_tabPanel',
      ...defaultOptions.classNames,
    ),
  }
}
