import { getJSTextareaProps } from '../../src'
import type { TextareaOptions } from '../../src/types'

describe('Textarea JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSTextareaProps().cssProps).toContain('appearance: none')
    expect(getJSTextareaProps().styles.appearance).toEqual('none')
  })

  test('should accept a none resize option', () => {
    const options = {
      resize: 'none',
    } as TextareaOptions
    expect(getJSTextareaProps(options).cssProps).toContain('resize: none')
    expect(getJSTextareaProps(options).styles.resize).toEqual('none')
  })

  test('should accept a horizontal resize option', () => {
    const options = {
      resize: 'horizontal',
    } as TextareaOptions
    expect(getJSTextareaProps(options).cssProps).toContain('resize: horizontal')
    expect(getJSTextareaProps(options).styles.resize).toEqual('horizontal')
  })

  test('should accept a vertical resize option', () => {
    const options = {
      resize: 'vertical',
    } as TextareaOptions
    expect(getJSTextareaProps(options).cssProps).toContain('resize: vertical')
    expect(getJSTextareaProps(options).styles.resize).toEqual('vertical')
  })

  test('should display a disabled state', () => {
    const options = {
      disabled: true,
      resize: 'vertical',
    } as TextareaOptions
    expect(getJSTextareaProps(options).cssProps).toContain('opacity: 0.5')
    expect(
      getJSTextareaProps(options).styles[
        '&:is([aria-disabled=true], :disabled)'
      ].opacity
    ).toEqual('0.5')
  })
})
