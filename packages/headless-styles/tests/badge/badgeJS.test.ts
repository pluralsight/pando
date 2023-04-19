import styles from '../../src/components/Badge/generated/badgeCSS.module'
import { getJSBadgeProps, getJSBadgeIconProps } from '../../src'

describe('Badge JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSBadgeProps().cssProps).toContain('display: inline-flex;')
    expect(getJSBadgeProps().styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.defaultBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept a default sentiment type', () => {
    const props = getJSBadgeProps({ sentiment: 'default' })
    expect(props.cssProps).toContain('color: var(--ps-text)')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.defaultBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept an info sentiment type', () => {
    const props = getJSBadgeProps({ sentiment: 'info' })
    expect(props.cssProps).toContain('color: var(--ps-info-text)')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.infoBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept an success sentiment type', () => {
    const props = getJSBadgeProps({ sentiment: 'success' })
    expect(props.cssProps).toContain('color: var(--ps-success-text)')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.successBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept an warning sentiment type', () => {
    const props = getJSBadgeProps({ sentiment: 'warning' })
    expect(props.cssProps).toContain('color: var(--ps-warning-text)')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.warningBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept an danger sentiment type', () => {
    const props = getJSBadgeProps({ sentiment: 'danger' })
    expect(props.cssProps).toContain('color: var(--ps-danger-text)')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.dangerBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept a filled usage type', () => {
    const props = getJSBadgeProps({ usage: 'filled' })
    expect(props.cssProps).toContain('color: var(--ps-text)')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.defaultBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept an outline usage type', () => {
    const props = getJSBadgeProps({ usage: 'outline' })
    expect(props.cssProps).toContain('border: 1px solid var(--ps-border)')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.defaultBadge,
      ...styles.sBadge,
      ...styles.outlineBadge,
    })
  })

  test('should accept a xs size option', () => {
    const props = getJSBadgeProps({ size: 'xs' })
    expect(props.cssProps).toContain('font-size: 0.625rem')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.defaultBadge,
      ...styles.xsBadge,
      ...styles.filledBadge,
    })
  })

  test('should accept a s size option', () => {
    const props = getJSBadgeProps({ size: 's' })
    expect(props.cssProps).toContain('font-size: 0.75rem')
    expect(props.styles).toMatchObject({
      ...styles.baseBadge,
      ...styles.defaultBadge,
      ...styles.sBadge,
      ...styles.filledBadge,
    })
  })

  test('should provide no icon props for a "xs" size', () => {
    expect(getJSBadgeIconProps('xs')).toMatchObject({})
  })

  test('should provide icon props for a "s" size', () => {
    const props = getJSBadgeIconProps('s')
    expect(props.iconOptions).toMatchObject({
      ariaHidden: true,
      ariaLabel: '',
      customSize: '0.75rem',
    })
    expect(props?.iconWrapper?.cssProps).toContain('display: flex')
    expect(props?.iconWrapper?.styles).toMatchObject(styles.badgeIcon)
  })
})
