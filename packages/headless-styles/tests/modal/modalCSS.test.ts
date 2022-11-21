import { getModalProps } from '../../src'

jest.mock('@pluralsight/shared', () => {
  return {
    modal: true,
  }
})

describe('Modal CSS', () => {
  const baseClass = 'ps-modal'
  const result = {
    cancelBtnOptions: {
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
      tech: '',
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
    modalHeading: {
      id: '',
      className: `${baseClass}-heading confirmDialogHeader modalHeading`,
    },
    modalBody: {
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
      modalHeading: {
        ...result.modalHeading,
        id: headingId,
      },
      modalBody: {
        ...result.modalBody,
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
    const label = 'Heading for modal'

    expect(
      getModalProps({
        id: 'modal-id',
        ariaLabel: label,
        bodyId: bodyId,
      })
    ).toEqual({
      ...result,
      modalBody: {
        ...result.modalBody,
        id: bodyId,
      },
      section: {
        ...result.section,
        'aria-describedby': bodyId,
        'aria-label': label,
        id: 'modal-id',
      },
    })
  })

  test('should accept a tech type', () => {
    expect(
      getModalProps({
        id: 'id',
        headingId: 'headingId',
        bodyId: 'bodyId',
        tech: 'svelte',
      })
    ).toEqual({
      ...result,
      cancelBtnOptions: {
        ...result.cancelBtnOptions,
        tech: 'svelte',
      },
      backdrop: {
        class: `${baseClass}-backdrop confirmDialogBackdrop`,
      },
      buttonWrapper: {
        class: `${baseClass}-btn-wrapper modalButtonWrapper`,
      },
      focusGuard: {
        'aria-hidden': true,
        'data-focus-guard': true,
        tabIndex: 0,
        class: `${baseClass}-focus-guard confirmFocusGuard`,
      },
      modalHeading: {
        id: 'headingId',
        class: `${baseClass}-heading confirmDialogTitle modalHeading`,
      },
      modalBody: {
        id: 'bodyId',
        class: `${baseClass}-body modalBody`,
      },
      section: {
        'aria-modal': true,
        'aria-describedby': 'bodyId',
        'aria-labelledby': 'headingId',
        id: 'id',
        role: 'dialog',
        tabIndex: -1,
        class: `${baseClass}-section confirmDialogSection modalSection`,
      },
      wrapper: {
        'data-focus-lock-disabled': false,
        tabIndex: -1,
        class: `${baseClass} confirmDialogWrapper`,
      },
    })
  })
})
