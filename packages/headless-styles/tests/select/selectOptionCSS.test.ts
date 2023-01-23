import { getSelectOptionProps } from '../../src'

describe('Select Option CSS', () => {
  const baseClass = 'ps-select-option'
  const result = {
    className: `${baseClass} selectOption`,
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
})
