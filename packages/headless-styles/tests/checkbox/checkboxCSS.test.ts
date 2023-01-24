import { getCheckboxProps } from '../../src'

describe('Checkbox CSS', () => {
  const baseClass = 'ps-checkbox'
  const dataPropResults = {
    'data-checked': false,
    'data-invalid': false,
    'data-readonly': false,
    'data-required': false,
  }
  const result = {
    iconOptions: {
      size: 's',
    },
    input: {
      'aria-invalid': false,
      checked: false,
      disabled: false,
      id: '',
      indeterminate: 'false',
      name: '',
      readOnly: false,
      required: false,
      type: 'checkbox',
      value: '',
      className: `${baseClass}-input checkboxInput`,
    },
    checkboxContainer: {
      ...dataPropResults,
      className: `${baseClass}-container checkboxContainer`,
      disabled: false,
    },
    checkboxControl: {
      ...dataPropResults,
      'aria-hidden': true,
      className: `${baseClass}-control checkboxControl`,
      disabled: false,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getCheckboxProps()).toEqual(result)
  })
})
