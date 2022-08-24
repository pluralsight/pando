import {
  psBackground,
  psActionBackground,
} from '@pluralsight/design-tokens/meta/cssProperties'
import { getJSIconButtonProps } from '../../src'

describe('IconButton JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSIconButtonProps().button.cssProps).toContain(
      `font-family: inherit;`
    )
    expect(getJSIconButtonProps().button.styles.fontFamily).toEqual('inherit')
  })

  test('should allow a default sentiment', () => {
    const bg = psBackground
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        sentiment: 'default',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        sentiment: 'default',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a action sentiment', () => {
    const bg = psActionBackground
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        sentiment: 'action',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        sentiment: 'action',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a square usage', () => {
    const borderRadius = '6px'
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        usage: 'square',
      }).button.cssProps
    ).toContain(`border-radius: ${borderRadius}`)
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        usage: 'square',
      }).button.styles.borderRadius
    ).toEqual(borderRadius)
  })

  test('should allow a round usage', () => {
    const borderRadius = '50%'
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        usage: 'round',
      }).button.cssProps
    ).toContain(`border-radius: ${borderRadius}`)
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        usage: 'round',
      }).button.styles.borderRadius
    ).toEqual(borderRadius)
  })

  test('should allow a text usage', () => {
    const bg = 'transparent'
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        usage: 'text',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        usage: 'text',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a m size', () => {
    const height = '2rem'
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        size: 'm',
      }).button.cssProps
    ).toContain(`height: ${height}`)
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        size: 'm',
      }).button.styles.height
    ).toEqual(height)
  })

  test('should allow a l size', () => {
    const height = '3rem'
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        size: 'l',
      }).button.cssProps
    ).toContain(`height: ${height}`)
    expect(
      getJSIconButtonProps({
        ariaLabel: '',
        size: 'l',
      }).button.styles.height
    ).toEqual(height)
  })
})
