import { getDialogA11yLabel } from '../../../utils/a11yHelpers'
import type { DialogOptions } from '../../types'

export function createDialogProps(options: DialogOptions) {
  const { bodyId, headingId } = options

  return {
    body: {
      id: bodyId,
    },
    backdrop: {},
    focusGuard: {
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
    },
    heading: {
      id: headingId,
    },
    section: {
      'aria-modal': true,
      'aria-describedby': bodyId,
      id: options.id,
      role: 'alertdialog',
      tabIndex: -1,
      ...getDialogA11yLabel(options),
    },
    wrapper: {
      'data-focus-lock-disabled': false,
      tabIndex: -1,
    },
  }
}
