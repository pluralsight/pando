import { getJSInputProps } from '../../src'
import type { InputOptions } from '../../src/types'

describe('Input JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSInputProps().input.cssProps).toContain('2.9375rem')
    expect(getJSInputProps().input.styles.height).toEqual('2.9375rem')
  })

  test('should accept a medium size type', () => {
    const options = {
      size: 'm',
    } as InputOptions
    expect(getJSInputProps(options).input.cssProps).toContain('height: 2.5rem')
    expect(getJSInputProps(options).input.styles.height).toEqual('2.5rem')
  })

  test('should accept a large size type', () => {
    expect(getJSInputProps().input.cssProps).toContain('height: 2.9375rem')
    expect(getJSInputProps().input.styles.height).toEqual('2.9375rem')
  })
})
