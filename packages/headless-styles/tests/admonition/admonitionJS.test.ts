import {
  psDangerSurface,
  psInfoSurface,
  psSuccessSurface,
  psWarningSurface,
} from '@pluralsight/design-tokens/meta/cssProperties'
import { getJSAdmonitionProps } from '../../src'
import type { AdmonitionOptions } from '../../src/types'

describe('Admonition JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSAdmonitionProps().wrapper.cssProps).toContain(
      'align-items: flex-start'
    )
    expect(getJSAdmonitionProps().wrapper.styles.alignItems).toEqual(
      'flex-start'
    )
  })

  test('should accept a info sentiment option', () => {
    const infoOptions = { sentiment: 'info' } as AdmonitionOptions
    const bg = psInfoSurface
    expect(getJSAdmonitionProps(infoOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAdmonitionProps(infoOptions).wrapper.styles.background).toEqual(
      bg
    )
  })

  test('should accept a success sentiment option', () => {
    const successOptions = { sentiment: 'success' } as AdmonitionOptions
    const bg = psSuccessSurface
    expect(getJSAdmonitionProps(successOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(
      getJSAdmonitionProps(successOptions).wrapper.styles.background
    ).toEqual(bg)
  })

  test('should accept a warning sentiment option', () => {
    const warningOptions = { sentiment: 'warning' } as AdmonitionOptions
    const bg = psWarningSurface
    expect(getJSAdmonitionProps(warningOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(
      getJSAdmonitionProps(warningOptions).wrapper.styles.background
    ).toEqual(bg)
  })

  test('should accept a danger sentiment option', () => {
    const dangerOptions = { sentiment: 'danger' } as AdmonitionOptions
    const bg = psDangerSurface
    expect(getJSAdmonitionProps(dangerOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(
      getJSAdmonitionProps(dangerOptions).wrapper.styles.background
    ).toEqual(bg)
  })
})
