import { getSelectProps, getSelectOptionProps } from '../../src'
import type { SelectOptions } from '../../src/types'

describe('Select CSS', () => {
  describe('getSelectProps', () => {
    const baseClass = 'ps-select'
    const options = {
      id: 'email',
      name: 'user-email',
      value: '',
    } as SelectOptions
    const result = {
      fieldWrapper: {
        className: `${baseClass}-fieldWrapper selectFieldWrapper`,
      },
      iconWrapper: {
        className: `${baseClass}-icon selectIcon`,
      },
      select: {
        ['aria-invalid']: false,
        ['data-invalid']: false,
        ['data-readonly']: false,
        ['data-required']: false,
        disabled: false,
        id: options.id,
        name: options.name,
        readOnly: false,
        required: false,
        value: options.value,
        className: `${baseClass} selectBase lSelectBase`,
      },
      selectWrapper: {
        className: `${baseClass}-wrapper selectWrapper`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getSelectProps()).toEqual({
        ...result,
        select: {
          ...result.select,
          id: '',
          name: '',
        },
      })
    })

    test('should accept a m size option', () => {
      expect(getSelectProps({ ...options, size: 'm' })).toEqual({
        ...result,
        select: {
          ...result.select,
          className: `${baseClass} selectBase mSelectBase`,
        },
      })
    })

    test('should accept an describedBy option', () => {
      expect(getSelectProps({ ...options, describedBy: 'bad-email' })).toEqual({
        ...result,
        select: {
          ...result.select,
          ['aria-describedby']: 'bad-email',
        },
      })
    })
  })

  describe('getSelectOptionProps', () => {
    const result = {
      className: `ps-select-option selectOption`,
      value: '',
    }

    test('should allow no props to be passed in', () => {
      expect(getSelectOptionProps()).toEqual(result)
    })

    test('should accept a value option', () => {
      const optionValue = 'test value'

      expect(getSelectOptionProps({ value: optionValue })).toEqual({
        ...result,
        value: optionValue,
      })
    })

    test('should accept a placeholder option', () => {
      expect(getSelectOptionProps({ placeholder: 'placeholder' })).toEqual({
        ...result,
        disabled: true,
        hidden: true,
        value: '',
      })
    })
  })
})
