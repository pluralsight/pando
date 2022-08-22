import { getFormLabelProps } from '../../src'

describe('FormLabel CSS', () => {
  describe('getFormLabelProps', () => {
    const baseClass = 'ps-form-label'
    const htmlFor = 'email'
    const value = 'Email alerts'
    const result = {
      htmlFor: '',
      className: `${baseClass} formLabelBase`,
      value,
    }

    test('should allow no props to be passed in', () => {
      expect(getFormLabelProps()).toEqual({ ...result, value: 'Form label' })
    })

    test('should accept a htmlFor option', () => {
      expect(getFormLabelProps({ htmlFor, value })).toEqual({
        ...result,
        htmlFor,
      })
    })

    test('should accept a required option', () => {
      expect(getFormLabelProps({ htmlFor, required: true, value })).toEqual({
        ...result,
        htmlFor,
        value: `${value} (required)`,
      })
    })

    test('should accept a tech type', () => {
      expect(getFormLabelProps({ htmlFor, tech: 'svelte', value })).toEqual({
        for: htmlFor,
        class: `${baseClass} formLabelBase`,
        value,
      })
    })
  })
})
