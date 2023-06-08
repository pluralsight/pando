import { getSwitchProps } from '@headless-styles'

describe('Switch CSS', () => {
  const baseClass = 'pando-switch'
  const options = {
    id: 'email',
    name: '',
    checked: false,
    value: '',
  }
  const dataPropResults = {
    'data-checked': options.checked,
    disabled: false,
    'data-invalid': false,
    'data-readonly': false,
    'data-required': false,
  }
  const result = {
    wrapper: {
      className: `${baseClass}-wrapper pando_switchWrapper`,
    },
    input: {
      'aria-invalid': false,
      'aria-checked': 'false',
      'data-invalid': false,
      'data-readonly': false,
      'data-required': false,
      disabled: false,
      checked: false,
      id: '',
      name: '',
      type: 'checkbox',
      readOnly: false,
      required: false,
      role: 'switch',
      className: `${baseClass}-input pando_switchInput`,
    },
    switchContainer: {
      className: `${baseClass}-container pando_switchContainer`,
    },
    switchTrack: {
      ...dataPropResults,
      'aria-hidden': true,
      className: `${baseClass}-track pando_mSwitchTrack`,
      ['data-control']: true,
    },
    switchThumb: {
      ...dataPropResults,
      className: `${baseClass}-thumb pando_mSwitchThumb`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getSwitchProps()).toEqual(result)
  })

  test('should accept a size type', () => {
    expect(getSwitchProps({ ...options, size: 'm' })).toEqual({
      ...result,
      input: {
        ...result.input,
        id: options.id,
      },
    })
    expect(getSwitchProps({ ...options, size: 's' })).toEqual({
      ...result,
      input: {
        ...result.input,
        id: options.id,
      },
      switchTrack: {
        ...result.switchTrack,
        className: `${baseClass}-track pando_sSwitchTrack`,
      },
      switchThumb: {
        ...result.switchThumb,
        className: `${baseClass}-thumb pando_sSwitchThumb`,
      },
    })
  })

  test('should accept a checked type', () => {
    expect(getSwitchProps({ ...options, checked: true })).toEqual({
      ...result,
      input: {
        ...result.input,
        'aria-checked': 'true',
        id: options.id,
        checked: true,
      },
      switchThumb: {
        ...result.switchThumb,
        ['data-checked']: true,
      },
      switchTrack: {
        ...result.switchTrack,
        ['data-checked']: true,
      },
    })
  })

  test('should accept a disabled type', () => {
    expect(getSwitchProps({ ...options, disabled: true })).toEqual({
      ...result,
      input: {
        ...result.input,
        id: options.id,
        disabled: true,
      },
      switchThumb: {
        ...result.switchThumb,
        disabled: true,
      },
      switchTrack: {
        ...result.switchTrack,
        disabled: true,
      },
    })
  })

  test('should accept a required type', () => {
    expect(getSwitchProps({ ...options, required: true })).toEqual({
      ...result,
      input: {
        ...result.input,
        'data-required': true,
        id: options.id,
        required: true,
      },
      switchThumb: {
        ...result.switchThumb,
        ['data-required']: true,
      },
      switchTrack: {
        ...result.switchTrack,
        ['data-required']: true,
      },
    })
  })

  test('should accept a readonly type', () => {
    expect(getSwitchProps({ ...options, readOnly: true })).toEqual({
      ...result,
      input: {
        ...result.input,
        'data-readonly': true,
        id: options.id,
        readOnly: true,
      },
      switchThumb: {
        ...result.switchThumb,
        ['data-readonly']: true,
      },
      switchTrack: {
        ...result.switchTrack,
        ['data-readonly']: true,
      },
    })
  })

  test('should accept a name type', () => {
    expect(getSwitchProps({ ...options, name: 'email' })).toEqual({
      ...result,
      input: {
        ...result.input,
        id: options.id,
        name: 'email',
      },
    })
  })

  test('should accept a custom className', () => {
    expect(
      getSwitchProps({ ...options, classNames: ['custom-class'] })
    ).toEqual({
      ...result,
      input: {
        ...result.input,
        id: options.id,
      },
      wrapper: {
        ...result.wrapper,
        className: `${baseClass}-wrapper pando_switchWrapper custom-class`,
      },
    })
  })
})
