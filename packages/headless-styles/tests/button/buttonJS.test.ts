import {
  psBackground,
  psActionBackground,
  psDangerBackground,
} from '@pluralsight/design-tokens/meta/cssProperties'
import { getJSButtonProps } from '../../src'

describe('Button JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSButtonProps().button.cssProps).toContain(
      `font-family: inherit;`
    )
    expect(getJSButtonProps().button.styles.fontFamily).toEqual('inherit')
  })

  test('should allow a default sentiment', () => {
    const bg = psBackground
    expect(
      getJSButtonProps({
        sentiment: 'default',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        sentiment: 'default',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a action sentiment', () => {
    const bg = psActionBackground
    expect(
      getJSButtonProps({
        sentiment: 'action',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        sentiment: 'action',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a danger sentiment', () => {
    const bg = psDangerBackground
    expect(
      getJSButtonProps({
        sentiment: 'danger',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        sentiment: 'danger',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a filled usage', () => {
    const bg = psActionBackground
    expect(
      getJSButtonProps({
        usage: 'filled',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        usage: 'filled',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a outline usage', () => {
    const bg = 'transparent'
    expect(
      getJSButtonProps({
        usage: 'outline',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        usage: 'outline',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a text usage', () => {
    const bg = 'transparent'
    expect(
      getJSButtonProps({
        usage: 'text',
      }).button.cssProps
    ).toContain(`background-color: ${bg}`)
    expect(
      getJSButtonProps({
        usage: 'text',
      }).button.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should allow a m size', () => {
    const height = '2rem'
    expect(
      getJSButtonProps({
        size: 'm',
      }).button.cssProps
    ).toContain(`height: ${height}`)
    expect(
      getJSButtonProps({
        size: 'm',
      }).button.styles.height
    ).toEqual(height)
  })

  test('should allow a l size', () => {
    const height = '2.75rem'
    expect(
      getJSButtonProps({
        size: 'l',
      }).button.cssProps
    ).toContain(`height: ${height}`)
    expect(
      getJSButtonProps({
        size: 'l',
      }).button.styles.height
    ).toEqual(height)
  })
})
