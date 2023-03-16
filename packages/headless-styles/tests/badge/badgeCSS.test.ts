import { getBadgeProps } from '../../src'

describe('Badge CSS', () => {
  describe('getBadgeProps', () => {
    const baseClass = 'ps-badge'
    const result = {
      iconOptions: {
        ariaHidden: true,
        ariaLabel: '',
        customSize: '0.75rem',
      },
      badge: {
        className: `${baseClass} filledBadge defaultBadge sBadge`,
      },
      iconWrapper: {
        className: `${baseClass}-icon badgeIcon`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getBadgeProps()).toEqual(result)
    })

    test('should accept a default sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'default' })).toEqual(result)
    })

    test('should accept a info sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'info' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} filledBadge infoBadge sBadge`,
        },
      })
    })

    test('should accept a success sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'success' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} filledBadge successBadge sBadge`,
        },
      })
    })

    test('should accept a warning sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'warning' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} filledBadge warningBadge sBadge`,
        },
      })
    })

    test('should accept a danger sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'danger' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} filledBadge dangerBadge sBadge`,
        },
      })
    })

    test('should accept a filled usage option', () => {
      expect(getBadgeProps({ usage: 'filled' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} filledBadge defaultBadge sBadge`,
        },
      })
    })

    test('should accept a outline usage option', () => {
      expect(getBadgeProps({ usage: 'outline' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} outlineBadge defaultBadge sBadge`,
        },
      })
    })

    test('should accept a xs size option', () => {
      const xsResult = {
        badge: {
          className: `${baseClass} filledBadge defaultBadge xsBadge`,
        },
      }
      expect(getBadgeProps({ size: 'xs' })).toEqual(xsResult)
    })
  })
})
