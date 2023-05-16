import { getRadioProps } from '../../src'

describe('Radio CSS', () => {
  const baseClass = 'pando-radio'
  const dataPropResults = {
    'data-checked': false,
    'data-invalid': false,
    'data-readonly': false,
    'data-required': false,
  }
  const result = {
    input: {
      'aria-invalid': false,
      checked: false,
      disabled: false,
      id: '',
      name: '',
      readOnly: false,
      required: false,
      type: 'radio',
      value: '',
      className: `${baseClass}-input pando_radioInput`,
    },
    radioContainer: {
      ...dataPropResults,
      className: `${baseClass}-container pando_radioContainer`,
      disabled: false,
    },
    radioControl: {
      ...dataPropResults,
      'aria-hidden': true,
      className: `${baseClass}-control pando_radioControl`,
      disabled: false,
      ['data-control']: true,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getRadioProps()).toEqual(result)
  })
})
