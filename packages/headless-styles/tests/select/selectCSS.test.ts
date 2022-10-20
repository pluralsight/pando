import { getSelectProps } from '../../src'
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
        className: `${baseClass}-icon lSelectIcon`,
      },
      select: {
        ['aria-invalid']: false,
        ['data-disabled']: false,
        ['data-invalid']: false,
        ['data-readonly']: false,
        ['data-required']: false,
        disabled: false,
        id: options.id,
        name: options.name,
        readOnly: false,
        required: false,
        value: options.value,
        className: `${baseClass} lSelectBase`,
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
        iconWrapper: {
          ...result.iconWrapper,
          className: `${baseClass}-icon mSelectIcon`,
        },
        select: {
          ...result.select,
          className: `${baseClass} mSelectBase`,
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

    test('should accept a tech type', () => {
      expect(getSelectProps({ ...options, tech: 'svelte' })).toEqual({
        ...result,
        fieldWrapper: {
          class: result.fieldWrapper.className,
        },
        iconWrapper: {
          class: `${result.iconWrapper.className} selectIcon`,
        },
        select: {
          ['aria-invalid']: false,
          ['data-disabled']: false,
          ['data-invalid']: false,
          ['data-readonly']: false,
          ['data-required']: false,
          disabled: false,
          id: options.id,
          name: options.name,
          readOnly: false,
          required: false,
          value: options.value,
          class: 'ps-select selectBase lSelectBase',
        },
        selectWrapper: {
          class: result.selectWrapper.className,
        },
      })
    })
  })
})
