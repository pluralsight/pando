import { createClassNameProp } from '../../utils/helpers'
import type { DefaultOptions } from '../../utils/types'
import './actionMenu.scss'

const ACTION_MENU = 'pando-actionMenu'

function getDefaultActionMenuOptions(options?: DefaultOptions) {
  return {
    classNames: options?.classNames ?? [],
  }
}

/**
 * Creates the className prop for the ActionMenu button group element.
 *
 * @param options.classNames - An array of class names to apply to the action menu button group element.
 * @example getActionMenuButtonGroupStyles({ classNames: ['my-class'] })
 */
export function getActionMenuButtonGroupStyles(options?: DefaultOptions) {
  const defaultOptions = getDefaultActionMenuOptions(options)
  return {
    ...createClassNameProp(
      `${ACTION_MENU}-btn-group`,
      'pando_actionMenuBtnGroup',
      ...defaultOptions.classNames,
    ),
  }
}

/**
 * Creates the className prop for the ActionMenu button element.
 * @param options.classNames - An array of class names to apply to the action menu button element.
 * @example getActionMenuButtonStyles({ classNames: ['my-class'] })
 */
export function getActionMenuButtonStyles(options?: DefaultOptions) {
  const defaultOptions = getDefaultActionMenuOptions(options)
  return {
    ...createClassNameProp(
      `${ACTION_MENU}-btn`,
      'pando_actionMenuBtn',
      ...defaultOptions.classNames,
    ),
  }
}

/**
 * Creates the className prop for the ActionMenu trigger button element.
 *
 * @param options.classNames - An array of class names to apply to the action menu button element.
 * @example getActionMenuTriggerStyles({ classNames: ['my-class'] })
 */
export function getActionMenuTriggerStyles(options?: DefaultOptions) {
  const defaultOptions = getDefaultActionMenuOptions(options)
  return {
    ...createClassNameProp(
      `${ACTION_MENU}-trigger`,
      'pando_actionMenuTrigger',
      ...defaultOptions.classNames,
    ),
  }
}
