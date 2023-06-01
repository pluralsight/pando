import {
  getAlertBackdropProps,
  getAlertBodyProps,
  getAlertCancelButtonProps,
  getAlertConfirmButtonProps,
  getAlertHeaderProps,
  getAlertHeadingProps,
  getAlertFooterProps,
  getAlertInputProps,
  getAlertLabelProps,
  getAlertProps,
} from '../../src/index'

describe('Alert CSS', () => {
  test('should return the correct props for the alert', () => {
    const props = getAlertProps()

    expect(props).toEqual({
      'aria-modal': true,
      className: 'pando-alert-section pando_alertDialogSection',
      role: 'document',
      tabIndex: -1,
    })
  })

  test('should return the correct props for the alert backdrop', () => {
    const id = 'alert-id'
    const headingId = 'alert-header-id'
    const bodyId = 'alert-body-id'
    const props = getAlertBackdropProps({
      bodyId,
      headingId,
      id,
    })

    expect(props).toEqual({
      backdrop: {
        className: 'pando-alert-backdrop pando_alertDialogBackdrop',
      },
      focusGuard: {
        'aria-hidden': true,
        'data-focus-guard': true,
        tabIndex: 0,
        className: 'pando-alert-focus-guard pando_alertDialogFocusGuard',
      },
      wrapper: {
        'aria-describedby': bodyId,
        'aria-labelledby': headingId,
        'data-focus-lock-disabled': false,
        id: id,
        role: 'alertdialog',
        tabIndex: -1,
        className: 'pando-alert pando_alertDialogWrapper',
      },
    })
  })

  test('should return the correct props for the alert body', () => {
    const bodyId = 'body-id'
    const props = getAlertBodyProps(bodyId)

    expect(props).toEqual({
      id: bodyId,
      className: 'pando-alert-body',
    })
  })

  test('should return the correct props for the alert cancel button', () => {
    const props = getAlertCancelButtonProps()

    expect(props).toEqual({
      btnOptions: {
        usage: 'outline',
      },
      button: {
        className: 'pando-alert-cancel',
      },
    })
  })

  test('should return the correct props for the alert confirm button', () => {
    expect(getAlertConfirmButtonProps('non-destructive')).toEqual({
      btnOptions: {
        sentiment: 'action',
      },
      button: {
        className: 'pando-alert-confirm',
      },
    })
    expect(getAlertConfirmButtonProps('destructive')).toEqual({
      btnOptions: {
        sentiment: 'danger',
      },
      button: {
        className: 'pando-alert-confirm',
      },
    })
  })

  test('should return the correct props for the alert header', () => {
    const result = {
      header: {
        className: 'pando-alert-header pando_alertDialogHeader',
      },
    }

    expect(getAlertHeaderProps('non-destructive')).toEqual(result)
    expect(getAlertHeaderProps('destructive')).toEqual({
      ...result,
      iconOptions: {
        ariaHidden: true,
        size: 'm',
      },
      iconWrapper: {
        className: 'pando-alert-icon pando_alertDialogTitleIcon',
      },
    })
  })

  test('should return the correct props for the alert heading', () => {
    const id = 'heading-id'
    const props = getAlertHeadingProps(id)

    expect(props).toEqual({
      id: id,
      className: 'pando-alert-heading',
    })
  })

  test('should return the correct props for the alert footer', () => {
    const props = getAlertFooterProps()

    expect(props).toEqual({
      className: 'pando-alert-footer pando_alertDialogFooter',
    })
  })

  test('should return the correct props for the alert input', () => {
    const options = {
      id: 'input-id',
      placeholder: 'input-placeholder',
      name: 'input-name',
      type: 'text' as const,
      value: 'input-value',
    }
    const props = getAlertInputProps(options)

    expect(props).toEqual({
      inputOptions: {
        ...options,
        pandoSize: 'l',
      },
      inputWrapper: {
        className: 'pando-alert-input-wrapper pando_alertDialogInputWrapper',
      },
    })
  })

  test('should return the correct props for the alert label', () => {
    const id = 'label-id'
    const props = getAlertLabelProps(id)

    expect(props).toEqual({
      htmlFor: id,
      className: 'pando-alert-label pando_alertDialogLabel',
    })
  })
})
