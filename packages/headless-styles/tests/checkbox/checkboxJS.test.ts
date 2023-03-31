import { getJSCheckboxProps } from '../../src'

describe('Checkbox JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSCheckboxProps().checkboxContainer.cssProps).toContain(
      'align-items: center'
    )
    expect(getJSCheckboxProps().checkboxContainer.styles.alignItems).toEqual(
      'center'
    )
  })
  test('should accept an indeterminate option', () => {
    expect(
      getJSCheckboxProps({
        checked: false,
        id: 'indeterminate-test',
        indeterminate: true,
        name: 'indeterminate-test',
        value: 'indeterminate',
      }).input.a11yProps['aria-checked']
    ).toBe('mixed')
  })
})
