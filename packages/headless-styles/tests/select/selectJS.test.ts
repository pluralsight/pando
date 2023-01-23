import { getJSSelectProps, getJSSelectOptionProps } from '../../src'
import type { SelectOptions } from '../../src/types'

describe('Select JS', () => {
  describe('getJSSelectProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSSelectProps().select.cssProps).toContain('3rem')
      expect(getJSSelectProps().select.styles.height).toEqual('3rem')
    })

    test('should accept a medium size type', () => {
      const options = {
        size: 'm',
      } as SelectOptions
      expect(getJSSelectProps(options).select.cssProps).toContain(
        'height: 2rem'
      )
      expect(getJSSelectProps(options).select.styles.height).toEqual('2rem')
    })

    test('should accept a large size type', () => {
      expect(getJSSelectProps().select.cssProps).toContain('height: 3rem')
      expect(getJSSelectProps().select.styles.height).toEqual('3rem')
    })
  })

  describe('getJSSelectOptionProps', () => {
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
})
