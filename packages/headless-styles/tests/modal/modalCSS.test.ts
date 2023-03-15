import { getModalProps } from '../../src'

describe('Modal CSS', () => {
  const baseClass = 'ps-modal'
  const result = {
    cancelBtnOptions: {
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
    },
    backdrop: {
      className: `${baseClass}-backdrop confirmDialogBackdrop`,
    },
    buttonWrapper: {
      className: `${baseClass}-btn-wrapper modalButtonWrapper`,
    },
    focusGuard: {
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
      className: `${baseClass}-focus-guard confirmFocusGuard`,
    },
    heading: {
      id: '',
      className: `${baseClass}-heading confirmDialogHeader modalHeading`,
    },
    body: {
      id: '',
      className: `${baseClass}-body modalBody`,
    },
    section: {
      'aria-modal': true,
      'aria-describedby': '',
      id: '',
      role: 'dialog',
      tabIndex: -1,
      className: `${baseClass}-section confirmDialogSection modalSection`,
    },
    wrapper: {
      'data-focus-lock-disabled': false,
      tabIndex: -1,
      className: `${baseClass} confirmDialogWrapper`,
    },
  }

  test('should accept a heading ID', () => {
    const bodyId = 'modal-body'
    const headingId = 'modal-heading'

    expect(
      getModalProps({
        id: 'modal-id',
        headingId: headingId,
        bodyId: bodyId,
      })
    ).toEqual({
      ...result,
      heading: {
        ...result.heading,
        id: headingId,
      },
      body: {
        ...result.body,
        id: bodyId,
      },
      section: {
        ...result.section,
        'aria-describedby': bodyId,
        'aria-labelledby': headingId,
        id: 'modal-id',
      },
    })
  })

  test('should accept an ariaLabel instead of headingId', () => {
    const bodyId = 'modal-body'
    const ariaLabel = 'Heading for modal'

    expect(
      getModalProps({
        id: 'modal-id',
        ariaLabel,
        bodyId,
      })
    ).toEqual({
      ...result,
      body: {
        ...result.body,
        id: bodyId,
      },
      section: {
        ...result.section,
        'aria-describedby': bodyId,
        'aria-label': ariaLabel,
        id: 'modal-id',
      },
    })
  })
})
