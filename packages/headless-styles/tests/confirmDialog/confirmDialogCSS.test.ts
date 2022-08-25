import { getConfirmDialogProps } from '../../src'

describe('Confirm Dialog CSS', () => {
  const baseClass = 'ps-confirm-dialog'
  const result = {
    cancelBtnOptions: {
      usage: 'outline',
    },
    agreeBtnOptions: {
      sentiment: 'action',
    },
    confirmTitle: {
      id: '',
      className: `${baseClass}-title confirmDialogTitle`,
    },
    confirmBody: {
      id: '',
      className: `${baseClass}-body`,
    },
    backdrop: {
      className: `${baseClass}-backdrop confirmDialogBackdrop`,
    },
    buttonGroup: {
      className: `${baseClass}-btn-group confirmDialogBtnGroup`,
    },
    cancelButton: {
      className: `${baseClass}-cancel confirmDialogCancelBtn`,
    },
    focusGuard: {
      ['data-aria-hidden']: true,
      ['data-focus-guard']: true,
      tabIndex: 0,
      className: `${baseClass}-focus-guard confirmFocusGuard`,
    },
    section: {
      ['aria-modal']: true,
      ['aria-describedby']: '',
      ['aria-labelledby']: '',
      id: '',
      role: 'alertdialog',
      tabIndex: -1,
      className: `${baseClass}-section confirmDialogSection`,
    },
    wrapper: {
      ['data-focus-lock-disabled']: false,
      tabIndex: -1,
      className: `${baseClass} confirmDialogWrapper`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getConfirmDialogProps()).toEqual(result)
  })

  test('should accept a non-destructive kind type', () => {
    expect(
      getConfirmDialogProps({
        kind: 'non-destructive',
        id: 'nd-test',
        headerId: 'nd-header-test',
        bodyId: 'nd-body-test',
      })
    ).toEqual({
      ...result,
      confirmBody: {
        ...result.confirmBody,
        id: 'nd-body-test',
      },
      confirmTitle: {
        ...result.confirmTitle,
        id: 'nd-header-test',
      },
      section: {
        ...result.section,
        ['aria-describedby']: 'nd-body-test',
        ['aria-labelledby']: 'nd-header-test',
        id: 'nd-test',
      },
    })
  })

  test('should accept a destructive kind type', () => {
    expect(
      getConfirmDialogProps({
        kind: 'destructive',
        id: 'test',
        headerId: 'header-test',
        bodyId: 'body-test',
      })
    ).toEqual({
      ...result,
      agreeBtnOptions: {
        sentiment: 'danger',
      },
      confirmBody: {
        ...result.confirmBody,
        id: 'body-test',
      },
      confirmTitle: {
        ...result.confirmTitle,
        id: 'header-test',
      },
      section: {
        ...result.section,
        ['aria-describedby']: 'body-test',
        ['aria-labelledby']: 'header-test',
        id: 'test',
      },
    })
  })

  test('should accept a tech type', () => {
    expect(
      getConfirmDialogProps({
        id: '',
        headerId: '',
        bodyId: '',
        tech: 'svelte',
      })
    ).toEqual({
      ...result,
      confirmTitle: {
        id: '',
        class: `${baseClass}-title confirmDialogTitle`,
      },
      confirmBody: {
        id: '',
        class: `${baseClass}-body`,
      },
      backdrop: {
        class: `${baseClass}-backdrop confirmDialogBackdrop`,
      },
      buttonGroup: {
        class: `${baseClass}-btn-group confirmDialogBtnGroup`,
      },
      cancelButton: {
        class: `${baseClass}-cancel confirmDialogCancelBtn`,
      },
      focusGuard: {
        ['data-aria-hidden']: true,
        ['data-focus-guard']: true,
        tabIndex: 0,
        class: `${baseClass}-focus-guard confirmFocusGuard`,
      },
      section: {
        ['aria-modal']: true,
        ['aria-describedby']: '',
        ['aria-labelledby']: '',
        id: '',
        role: 'alertdialog',
        tabIndex: -1,
        class: `${baseClass}-section confirmDialogSection`,
      },
      wrapper: {
        ['data-focus-lock-disabled']: false,
        tabIndex: -1,
        class: `${baseClass} confirmDialogWrapper`,
      },
    })
  })
})
