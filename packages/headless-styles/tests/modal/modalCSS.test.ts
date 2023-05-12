import { getModalProps } from '../../src'

describe('Modal CSS', () => {
  const baseClass = 'pando-modal'
  const result = {
    cancelBtnOptions: {
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
    },
    backdrop: {
      className: `${baseClass}-backdrop pando_modalBackdrop`,
    },
    buttonWrapper: {
      className: `${baseClass}-btn-wrapper pando_modalButtonWrapper`,
    },
    focusGuard: {
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
      className: `${baseClass}-focus-guard pando_modalFocusGuard`,
    },
    heading: {
      id: '',
      className: `${baseClass}-heading pando_modalHeader`,
    },
    body: {
      id: '',
      className: `${baseClass}-body pando_modalBody`,
    },
    section: {
      'aria-modal': true,
      'aria-describedby': '',
      id: '',
      role: 'dialog',
      tabIndex: -1,
      className: `${baseClass}-section pando_modalSection`,
    },
    wrapper: {
      'data-focus-lock-disabled': false,
      tabIndex: -1,
      className: `${baseClass} pando_modalWrapper`,
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
