import { getJSInputProps } from '../../src'
import type { InputType } from '../../src/components/Input/types'
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

  test('should display a disabled state', () => {
    const options = {
      disabled: true,
      id: 'test',
      name: 'test',
      placeholder: '',
      type: 'text' as InputType,
      value: '',
    }
    expect(getJSInputProps(options).input.cssProps).toContain('opacity: 0.5')
    expect(getJSInputProps(options).input.styles['&:disabled'].opacity).toEqual(
      '0.5'
    )
  })
})
