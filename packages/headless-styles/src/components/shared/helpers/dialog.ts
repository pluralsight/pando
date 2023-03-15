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
      'aria-labelledby': headingId,
      id: options.id,
      role: 'alertdialog',
      tabIndex: -1,
    },
    wrapper: {
      'data-focus-lock-disabled': false,
      tabIndex: -1,
    },
  }
}
