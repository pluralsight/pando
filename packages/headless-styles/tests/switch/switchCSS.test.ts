import { getSwitchProps } from '../../src'

describe('Switch CSS', () => {
  const baseClass = 'ps-switch'
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
      className: `${baseClass}-wrapper wrapper`,
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
      className: `${baseClass}-input input`,
      value: '',
    },
    switchContainer: {
      className: `${baseClass}-container container`,
    },
    switchTrack: {
      ...dataPropResults,
      'aria-hidden': true,
      className: `${baseClass}-track mTrack`,
    },
    switchThumb: {
      ...dataPropResults,
      className: `${baseClass}-thumb thumb`,
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
        className: `${baseClass}-track sTrack`,
      },
      switchThumb: {
        ...result.switchThumb,
        className: `${baseClass}-thumb thumb`,
      },
    })
  })
})
