import { getCheckboxProps } from '@headless-styles'

describe('Checkbox CSS', () => {
  const baseClass = 'pando-checkbox'
  const dataPropResults = {
    'data-invalid': false,
    'data-readonly': false,
    'data-required': false,
  }
  const result = {
    iconOptions: {
      size: 's',
    },
    input: {
      ...dataPropResults,
      'aria-checked': 'false',
      'aria-invalid': false,
      checked: false,
      disabled: false,
      id: '',
      indeterminate: 'false',
      name: '',
      readOnly: false,
      required: false,
      type: 'checkbox',
      className: `${baseClass}-input pando_checkboxInput`,
    },
    checkboxContainer: {
      ...dataPropResults,
      'data-checked': false,
      className: `${baseClass}-container pando_checkboxContainer`,
      disabled: false,
    },
    checkboxControl: {
      ...dataPropResults,
      'aria-hidden': true,
      'data-checked': false,
      ['data-control']: true,
      className: `${baseClass}-control pando_checkboxControl`,
      disabled: false,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getCheckboxProps()).toEqual(result)
  })

  test('should accept an indeterminate option', () => {
    expect(
      getCheckboxProps({
        checked: false,
        id: 'indeterminate-test',
        indeterminate: true,
        name: 'indeterminate-test',
        value: 'indeterminate',
      }).input['aria-checked']
    ).toBe('mixed')
  })

  test('should accept a disabled option', () => {
    const options = {
      disabled: true,
      id: 'disabled-test',
      name: 'disabled-test',
    }
    expect(getCheckboxProps(options).checkboxContainer.disabled).toBe(true)
    expect(getCheckboxProps(options).checkboxControl.disabled).toBe(true)
  })

  test('should accept a readOnly option', () => {
    const options = {
      id: 'readonly-test',
      name: 'readonly-test',
      readOnly: true,
      value: 'readonly',
    }
    expect(getCheckboxProps(options).input.readOnly).toBe(true)
    expect(getCheckboxProps(options).input['data-readonly']).toBe(true)
    expect(getCheckboxProps(options).checkboxControl['data-readonly']).toBe(
      true
    )
  })

  test('should accept a required option', () => {
    expect(
      getCheckboxProps({
        id: 'required-test',
        name: 'required-test',
        required: true,
        value: 'required',
      }).input.required
    ).toBe(true)
  })

  test('should accept a classNames option', () => {
    expect(
      getCheckboxProps({
        classNames: ['test'],
        id: 'classNames-test',
        name: 'classNames-test',
      }).checkboxContainer.className
    ).toBe('pando-checkbox-container pando_checkboxContainer test')
  })

  test('should accept a checked option', () => {
    expect(
      getCheckboxProps({
        checked: true,
        id: 'checked-test',
        name: 'checked-test',
      }).input.checked
    ).toBe(true)
  })
})
