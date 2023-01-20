import { getJSSelectOptionProps } from '../../src'

describe('Select Option JS', () => {
  test('should allow no props to be passed in', () => {
    const selectOptionProps = getJSSelectOptionProps()
    expect(selectOptionProps.option.cssProps).toContain(
      'background-color: initial'
    )
    expect(selectOptionProps.option.styles.backgroundColor).toEqual('initial')
  })

  test('should accept a value', () => {
    const optionValue = 'test value'
    expect(
      getJSSelectOptionProps({ value: optionValue }).a11yProps.value
    ).toEqual(optionValue)
  })
})
