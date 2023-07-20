import { createClassNameProp } from '../../utils/helpers'
import type { DefaultOptions } from '../../utils/types'
import { getDefaultTabsOptions } from './shared'
import './tabs.scss'

const TAB = 'pando-tabs'

/**
 * Creates the className prop for the tab wrapper element.
 * @param options.classNames - An array of class names to apply to the tab wrapper element.
 * @example getTabWrapperStyles({ classNames: ['my-class'] })
 */
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

/**
 * Creates the className prop for the tab list element.
 * @param options.classNames - An array of class names to apply to the tab wrapper element.
 * @example getTabListStyles({ classNames: ['my-class'] })
 */
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

/**
 * Creates the className prop for the tab element.
 * @param options.classNames - An array of class names to apply to the tab wrapper element.
 * @example getTabStyles({ classNames: ['my-class'] })
 */
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

/**
 * Creates the className prop for the tab panel element.
 * @param options.classNames - An array of class names to apply to the tab wrapper element.
 * @example getTabPanelStyles({ classNames: ['my-class'] })
 */
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
