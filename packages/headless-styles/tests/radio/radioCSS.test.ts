import { getRadioProps } from '@headless-styles'

describe('Radio CSS', () => {
  const baseClass = 'pando-radio'
  const dataPropResults = {
    'data-invalid': false,
    'data-readonly': false,
    'data-required': false,
  }
  const result = {
    input: {
      ...dataPropResults,
      'aria-checked': 'false',
      'aria-invalid': false,
      checked: false,
      disabled: false,
      id: '',
      name: '',
      readOnly: false,
      required: false,
      type: 'radio',
      className: `${baseClass}-input pando_radioInput`,
    },
    radioContainer: {
      ...dataPropResults,
      'data-checked': false,
      className: `${baseClass}-container pando_radioContainer`,
      disabled: false,
    },
    radioControl: {
      ...dataPropResults,
      'aria-hidden': true,
      'data-checked': false,
      ['data-control']: true,
      className: `${baseClass}-control pando_radioControl`,
      disabled: false,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getRadioProps()).toEqual(result)
  })

  test('should accept a disabled option', () => {
    const options = {
      disabled: true,
      id: 'disabled-test',
      name: 'disabled-test',
    }
    expect(getRadioProps(options).radioContainer.disabled).toBe(true)
    expect(getRadioProps(options).radioControl.disabled).toBe(true)
  })

  test('should accept a readOnly option', () => {
    const options = {
      id: 'readonly-test',
      name: 'readonly-test',
      readOnly: true,
      value: 'readonly',
    }
    expect(getRadioProps(options).input.readOnly).toBe(true)
    expect(getRadioProps(options).input['data-readonly']).toBe(true)
    expect(getRadioProps(options).radioControl['data-readonly']).toBe(true)
  })

  test('should accept a required option', () => {
    expect(
      getRadioProps({
        id: 'required-test',
        name: 'required-test',
        required: true,
        value: 'required',
      }).input.required
    ).toBe(true)
  })

  test('should accept a classNames option', () => {
    expect(
      getRadioProps({
        classNames: ['test'],
        id: 'classNames-test',
        name: 'classNames-test',
      }).radioContainer.className
    ).toBe('pando-radio-container pando_radioContainer test')
  })

  test('should accept a checked option', () => {
    expect(
      getRadioProps({
        checked: true,
        id: 'checked-test',
        name: 'checked-test',
      }).input.checked
    ).toBe(true)
  })
})
