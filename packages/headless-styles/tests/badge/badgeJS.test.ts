import {
  psActionBackground,
  psSurfaceMedium,
  psText,
} from '@pluralsight/design-tokens/meta/cssProperties'
import { getJSBadgeProps } from '../../src'

describe('Badge JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSBadgeProps().badge.cssProps).toContain('display: flex;')
    expect(getJSBadgeProps().badge.styles.display).toEqual('flex')
  })

  test('should accept a default sentiment type', () => {
    const bg = psSurfaceMedium
    expect(getJSBadgeProps({ sentiment: 'default' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ sentiment: 'default' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept a action sentiment type', () => {
    const bg = psActionBackground
    expect(getJSBadgeProps({ sentiment: 'action' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ sentiment: 'action' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept a filled usage type', () => {
    const bg = psSurfaceMedium
    expect(getJSBadgeProps({ usage: 'filled' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ usage: 'filled' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept a outline usage type', () => {
    const bg = 'transparent'
    const border = `1px solid ${psText}`
    expect(getJSBadgeProps({ usage: 'outline' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(getJSBadgeProps({ usage: 'outline' }).badge.cssProps).toContain(
      `border: ${border};`
    )
    expect(
      getJSBadgeProps({ usage: 'outline' }).badge.styles.backgroundColor
    ).toEqual(bg)
    expect(getJSBadgeProps({ usage: 'outline' }).badge.styles.border).toEqual(
      border
    )
  })

  test('should accept a xs size option', () => {
    expect(getJSBadgeProps({ size: 'xs' }).iconWrapper).not.toBeDefined()
  })

  test('should accept a s size option', () => {
    const size = '0.75rem'
    expect(getJSBadgeProps().badge.cssProps).toContain(`font-size: ${size};`)
    expect(getJSBadgeProps({ size: 's' }).badge.styles.fontSize).toEqual(size)
  })
})
