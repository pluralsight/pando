import {
  psBackground,
  psBorder,
  psDangerSurface,
  psInfoSurface,
  psSuccessSurface,
  psWarningSurface,
} from '@pluralsight/design-tokens/meta/cssProperties'
import { getJSBadgeProps } from '../../src'

describe('Badge JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSBadgeProps().badge.cssProps).toContain('display: inline-flex;')
    expect(getJSBadgeProps().badge.styles.display).toEqual('inline-flex')
  })

  test('should accept a default sentiment type', () => {
    const bg = psBackground
    expect(getJSBadgeProps({ sentiment: 'default' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ sentiment: 'default' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept an info sentiment type', () => {
    const bg = psInfoSurface
    expect(getJSBadgeProps({ sentiment: 'info' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ sentiment: 'info' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept an success sentiment type', () => {
    const bg = psSuccessSurface
    expect(getJSBadgeProps({ sentiment: 'success' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ sentiment: 'success' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept an warning sentiment type', () => {
    const bg = psWarningSurface
    expect(getJSBadgeProps({ sentiment: 'warning' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ sentiment: 'warning' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept an danger sentiment type', () => {
    const bg = psDangerSurface
    expect(getJSBadgeProps({ sentiment: 'danger' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ sentiment: 'danger' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept a filled usage type', () => {
    const bg = psBackground
    expect(getJSBadgeProps({ usage: 'filled' }).badge.cssProps).toContain(
      `background-color: ${bg};`
    )
    expect(
      getJSBadgeProps({ usage: 'filled' }).badge.styles.backgroundColor
    ).toEqual(bg)
  })

  test('should accept an outline usage type', () => {
    const bg = 'transparent'
    const border = `1px solid ${psBorder}`
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
