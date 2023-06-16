import { getDialogA11yLabel } from '../../utils/a11yHelpers'
import type { DialogOptions } from '../types'

export function getAlertA11yProps(options: DialogOptions) {
  return {
    body: {
      id: options.bodyId,
    },
    focusGuard: {
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
    },
    footer: {},
    heading: {
      id: options.headingId,
    },
    section: {
      'aria-modal': true,
      role: 'document',
      tabIndex: -1,
    },
    wrapper: {
      'data-focus-lock-disabled': false,
      'aria-describedby': options.bodyId,
      role: 'alertdialog',
      tabIndex: -1,
      ...getDialogA11yLabel(options),
    },
  }
}
