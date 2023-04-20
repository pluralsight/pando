import { getBadgeProps, getBadgeIconProps } from '../../src'

describe('Badge CSS', () => {
  const baseClass = 'pando-badge'
  const result = {
    className: `${baseClass} filledBadge defaultBadge sBadge`,
  }

  test('should allow no props to be passed in', () => {
    expect(getBadgeProps()).toEqual(result)
  })

  test('should accept a default sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'default' })).toEqual(result)
  })

  test('should accept a info sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'info' })).toEqual({
      className: `${baseClass} filledBadge infoBadge sBadge`,
    })
  })

  test('should accept a success sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'success' })).toEqual({
      className: `${baseClass} filledBadge successBadge sBadge`,
    })
  })

  test('should accept a warning sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'warning' })).toEqual({
      className: `${baseClass} filledBadge warningBadge sBadge`,
    })
  })

  test('should accept a danger sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'danger' })).toEqual({
      className: `${baseClass} filledBadge dangerBadge sBadge`,
    })
  })

  test('should accept a filled usage option', () => {
    expect(getBadgeProps({ usage: 'filled' })).toEqual({
      className: `${baseClass} filledBadge defaultBadge sBadge`,
    })
  })

  test('should accept a outline usage option', () => {
    expect(getBadgeProps({ usage: 'outline' })).toEqual({
      className: `${baseClass} outlineBadge defaultBadge sBadge`,
    })
  })

  test('should accept a xs size option', () => {
    expect(getBadgeProps({ size: 'xs' })).toEqual({
      className: `${baseClass} filledBadge defaultBadge xsBadge`,
    })
  })

  test('should accept a classNames option', () => {
    expect(getBadgeProps({ classNames: ['foo'] })).toEqual({
      className: 'pando-badge filledBadge defaultBadge sBadge foo',
    })
  })

  test('should return no icon options if size is not s', () => {
    expect(getBadgeIconProps('xs')).toEqual({})
  })

  test('should return icon options if size is s', () => {
    expect(getBadgeIconProps('s')).toEqual({
      iconOptions: {
        ariaHidden: true,
        ariaLabel: '',
        customSize: '0.75rem',
      },
      iconWrapper: {
        className: `${baseClass}-icon badgeIcon`,
      },
    })
  })
})
