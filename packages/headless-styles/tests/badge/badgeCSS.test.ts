import { getBadgeProps, getBadgeIconProps } from '../../src'

describe('Badge CSS', () => {
  const baseClass = 'pando-badge'
  const result = {
    className: `${baseClass} pando_filledBadge pando_defaultBadge pando_sBadge`,
  }

  test('should allow no props to be passed in', () => {
    expect(getBadgeProps()).toEqual(result)
  })

  test('should accept a default sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'default' })).toEqual(result)
  })

  test('should accept a info sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'info' })).toEqual({
      className: `${baseClass} pando_filledBadge pando_infoBadge pando_sBadge`,
    })
  })

  test('should accept a success sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'success' })).toEqual({
      className: `${baseClass} pando_filledBadge pando_successBadge pando_sBadge`,
    })
  })

  test('should accept a warning sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'warning' })).toEqual({
      className: `${baseClass} pando_filledBadge pando_warningBadge pando_sBadge`,
    })
  })

  test('should accept a danger sentiment option', () => {
    expect(getBadgeProps({ sentiment: 'danger' })).toEqual({
      className: `${baseClass} pando_filledBadge pando_dangerBadge pando_sBadge`,
    })
  })

  test('should accept a filled usage option', () => {
    expect(getBadgeProps({ usage: 'filled' })).toEqual({
      className: `${baseClass} pando_filledBadge pando_defaultBadge pando_sBadge`,
    })
  })

  test('should accept a outline usage option', () => {
    expect(getBadgeProps({ usage: 'outline' })).toEqual({
      className: `${baseClass} pando_outlineBadge pando_defaultBadge pando_sBadge`,
    })
  })

  test('should accept a xs size option', () => {
    expect(getBadgeProps({ size: 'xs' })).toEqual({
      className: `${baseClass} pando_filledBadge pando_defaultBadge pando_xsBadge`,
    })
  })

  test('should accept a classNames option', () => {
    expect(getBadgeProps({ classNames: ['foo'] })).toEqual({
      className:
        'pando-badge pando_filledBadge pando_defaultBadge pando_sBadge foo',
    })
  })

  test('should return no icon options if size is not s', () => {
    expect(getBadgeIconProps('xs')).toEqual({})
  })

  test('should return icon options if size is s', () => {
    expect(getBadgeIconProps('s')).toEqual({
      iconOptions: {
        ariaHidden: true,
        customSize: '0.75rem',
      },
      iconWrapper: {
        className: `${baseClass}-icon pando_badgeIcon`,
      },
    })
  })
})
