import {
  getAlertDialogProps,
  getAlertDialogHeaderProps,
  getAlertDialogHeadingProps,
  getAlertDialogBodyProps,
  getAlertDialogLabelProps,
  getAlertDialogInputProps,
  getAlertDialogFooterProps,
  getAlertDialogCancelButtonProps,
  getAlertDialogConfirmButtonProps,
} from '@headless-styles'

describe('AlertDialog', () => {
  test('returns the correct alert props', () => {
    expect(
      getAlertDialogProps({
        bodyId: 'bodyId',
        headingId: 'headingId',
      })
    ).toEqual({
      'aria-describedby': 'headingId,bodyId',
      role: 'alertdialog',
      className: 'pando-alert pando_alertDialog',
    })
  })

  test('adds custom class names', () => {
    expect(
      getAlertDialogProps({
        bodyId: 'bodyId',
        classNames: ['custom-class-name'],
        headingId: 'headingId',
      })
    ).toEqual({
      'aria-describedby': 'headingId,bodyId',
      role: 'alertdialog',
      className: 'pando-alert pando_alertDialog custom-class-name',
    })
  })
})

describe('AlertDialogHeader', () => {
  test('returns the correct props for a non-destructive kind', () => {
    expect(getAlertDialogHeaderProps('non-destructive')).toEqual({
      header: {
        className: 'pando-alert-header pando_alertDialogHeader',
      },
    })
  })

  test('returns the correct props for a destructive kind', () => {
    expect(getAlertDialogHeaderProps('destructive')).toEqual({
      header: {
        className: 'pando-alert-header pando_alertDialogHeader',
      },
      iconWrapper: {
        className: 'pando-alert-icon pando_alertDialogTitleIcon',
      },
      iconOptions: {
        ariaHidden: true,
        size: 'm',
      },
    })
  })
})

describe('AlertDialogHeading', () => {
  test('returns the correct heading props', () => {
    expect(getAlertDialogHeadingProps('headingId')).toEqual({
      id: 'headingId',
      className: 'pando-alert-heading',
    })
  })
})

describe('AlertDialogBody', () => {
  test('returns the correct body props', () => {
    expect(getAlertDialogBodyProps('bodyId')).toEqual({
      id: 'bodyId',
      className: 'pando-alert-body',
    })
  })
})

describe('AlertDialogLabel', () => {
  test('returns the correct label props', () => {
    expect(getAlertDialogLabelProps('labelId')).toEqual({
      htmlFor: 'labelId',
      className: 'pando-alert-label pando_alertDialogLabel',
    })
  })
})

describe('AlertDialogInput', () => {
  test('returns the correct input props', () => {
    expect(
      getAlertDialogInputProps({
        id: 'inputId',
        name: 'inputName',
      })
    ).toEqual({
      inputOptions: {
        id: 'inputId',
        name: 'inputName',
        pandoSize: 'l',
      },
      inputWrapper: {
        className: 'pando-alert-input-wrapper pando_alertDialogInputWrapper',
      },
    })
  })
})

describe('AlertDialogFooter', () => {
  test('returns the correct props', () => {
    expect(getAlertDialogFooterProps()).toEqual({
      className: 'pando-alert-footer pando_alertDialogFooter',
    })
  })
})

describe('AlertDialogCancelButton', () => {
  test('returns the correct props', () => {
    expect(getAlertDialogCancelButtonProps()).toEqual({
      btnOptions: {
        sentiment: 'default',
        usage: 'outline',
      },
      button: {
        className: 'pando-alert-cancel-btn',
      },
    })
  })
})

describe('AlertDialogConfirmButton', () => {
  test('returns the correct props for a non-destructive kind', () => {
    expect(getAlertDialogConfirmButtonProps('non-destructive')).toEqual({
      btnOptions: {
        sentiment: 'action',
      },
      button: {
        className: 'pando-alert-confirm-btn',
      },
    })
  })

  test('returns the correct props for a destructive kind', () => {
    expect(getAlertDialogConfirmButtonProps('destructive')).toEqual({
      btnOptions: {
        sentiment: 'danger',
      },
      button: {
        className: 'pando-alert-confirm-btn',
      },
    })
  })
})
