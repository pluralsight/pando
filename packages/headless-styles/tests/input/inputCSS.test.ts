import { getInputProps } from '../../src'
import type { InputOptions } from '../../src/types'

describe('Input CSS', () => {
  describe('getInputProps', () => {
    const baseClass = 'ps-input'
    const options = {
      id: 'email',
      name: 'user-email',
      placeholder: 'Enter email',
      type: 'email',
      value: '',
    } as InputOptions
    const result = {
      input: {
        ['aria-invalid']: false,
        ['data-disabled']: false,
        ['data-invalid']: false,
        ['data-readonly']: false,
        ['data-required']: false,
        disabled: false,
        id: options.id,
        name: options.name,
        placeholder: options.placeholder,
        readOnly: false,
        required: false,
        type: options.type,
        value: options.value,
        className: `${baseClass} lInputBase`,
      },
      inputWrapper: {
        className: `${baseClass}-wrapper inputWrapper`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getInputProps()).toEqual({
        ...result,
        input: {
          ...result.input,
          id: '',
          name: '',
          placeholder: 'Enter text',
          type: 'text',
        },
      })
    })

    test('should accept a m size option', () => {
      expect(getInputProps({ ...options, size: 'm' })).toEqual({
        ...result,
        input: {
          ...result.input,
          className: `${baseClass} mInputBase`,
        },
      })
    })

    test('should accept an describedBy option', () => {
      expect(getInputProps({ ...options, describedBy: 'bad-email' })).toEqual({
        ...result,
        input: {
          ...result.input,
          ['aria-describedby']: 'bad-email',
        },
      })
    })

    test('should return invalidIconOptions when options.invalid', () => {
      expect(getInputProps({ ...options, invalid: true })).toEqual({
        ...result,
        input: {
          ...result.input,
          'aria-invalid': true,
          'data-invalid': true,
        },
        invalidIconWrapper: {
          className: `${baseClass}-icon lInputIcon`,
          'data-invalid': true,
        },
        invalidIconOptions: {
          ariaHidden: true,
          size: 'm',
          tech: options.tech,
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getInputProps({ ...options, tech: 'svelte' })).toEqual({
        ...result,
        input: {
          ['aria-invalid']: false,
          ['data-disabled']: false,
          ['data-invalid']: false,
          ['data-readonly']: false,
          ['data-required']: false,
          disabled: false,
          id: options.id,
          name: options.name,
          placeholder: options.placeholder,
          readOnly: false,
          required: false,
          type: options.type,
          value: options.value,
          class: 'ps-input inputBase lInputBase',
        },
        inputWrapper: {
          class: result.inputWrapper.className,
        },
      })
    })
  })
})
