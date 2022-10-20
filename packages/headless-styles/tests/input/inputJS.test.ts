import { getJSInputProps } from '../../src'
import type { InputOptions } from '../../src/types'

describe('Input JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSInputProps().input.cssProps).toContain('3rem')
    expect(getJSInputProps().input.styles.height).toEqual('3rem')
  })

  test('should accept a medium size type', () => {
    const options = {
      size: 'm',
    } as InputOptions
    expect(getJSInputProps(options).input.cssProps).toContain('height: 2rem')
    expect(getJSInputProps(options).input.styles.height).toEqual('2rem')
  })

  test('should accept a large size type', () => {
    expect(getJSInputProps().input.cssProps).toContain('height: 3rem')
    expect(getJSInputProps().input.styles.height).toEqual('3rem')
  })
})
