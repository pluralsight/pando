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
        className: `${baseClass} defaultBadge sBadge filledBadge`,
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
          className: `${baseClass} infoBadge sBadge filledBadge`,
        },
      })
    })

    test('should accept a success sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'success' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} successBadge sBadge filledBadge`,
        },
      })
    })

    test('should accept a warning sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'warning' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} warningBadge sBadge filledBadge`,
        },
      })
    })

    test('should accept a danger sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'danger' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} dangerBadge sBadge filledBadge`,
        },
      })
    })

    test('should accept a filled usage option', () => {
      expect(getBadgeProps({ usage: 'filled' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} defaultBadge sBadge filledBadge`,
        },
      })
    })

    test('should accept a outline usage option', () => {
      expect(getBadgeProps({ usage: 'outline' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} defaultBadge sBadge outlineBadge`,
        },
      })
    })

    test('should accept a xs size option', () => {
      const xsResult = {
        badge: {
          className: `${baseClass} defaultBadge xsBadge filledBadge`,
        },
      }
      expect(getBadgeProps({ size: 'xs' })).toEqual(xsResult)
    })
  })
})
