import { getSwitchProps } from '../../src'

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
      disabled: false,
      checked: false,
      id: '',
      name: '',
      type: 'checkbox',
      readOnly: false,
      required: false,
      role: 'switch',
      className: `${baseClass}-input pando_switchInput`,
      value: '',
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
})
