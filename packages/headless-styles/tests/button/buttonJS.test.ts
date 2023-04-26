import {
  psBackground,
  psActionBackground,
  psDangerBackground,
} from '@pluralsight/design-tokens/meta/cssProperties'
import { getJSButtonProps } from '../../src'

describe('Button JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSButtonProps().cssProps).toContain(`font-family: inherit;`)
    expect(getJSButtonProps().styles.fontFamily).toEqual('inherit')
  })

  test('should allow a default sentiment', () => {
    const bg = psBackground
    expect(
      getJSButtonProps({
        sentiment: 'default',
      }).cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        sentiment: 'default',
      }).styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a action sentiment', () => {
    const bg = psActionBackground
    expect(
      getJSButtonProps({
        sentiment: 'action',
      }).cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        sentiment: 'action',
      }).styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a danger sentiment', () => {
    const bg = psDangerBackground
    expect(
      getJSButtonProps({
        sentiment: 'danger',
      }).cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        sentiment: 'danger',
      }).styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a filled usage', () => {
    const bg = psActionBackground
    expect(
      getJSButtonProps({
        usage: 'filled',
      }).cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        usage: 'filled',
      }).styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a outline usage', () => {
    const bg = 'transparent'
    expect(
      getJSButtonProps({
        usage: 'outline',
      }).cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        usage: 'outline',
      }).styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a text usage', () => {
    const bg = 'transparent'
    expect(
      getJSButtonProps({
        usage: 'text',
      }).cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        usage: 'text',
      }).styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a m size', () => {
    const height = '2rem'
    expect(
      getJSButtonProps({
        size: 'm',
      }).cssProps
    ).toContain(`height: ${height}`)
    expect(
      getJSButtonProps({
        size: 'm',
      }).styles.height
    ).toEqual(height)
  })

  test('should allow a l size', () => {
    const height = '3rem'
    expect(
      getJSButtonProps({
        size: 'l',
      }).cssProps
    ).toContain(`height: ${height}`)
    expect(
      getJSButtonProps({
        size: 'l',
      }).styles.height
    ).toEqual(height)
  })

  test('should allow a disabled state', () => {
    const disabled = true
    expect(
      getJSButtonProps({
        disabled,
      }).cssProps
    ).toContain(`opacity: 0.5`)
    expect(
      getJSButtonProps({
        disabled,
      }).styles['&:disabled'].opacity
    ).toEqual('0.5')
  })
})
