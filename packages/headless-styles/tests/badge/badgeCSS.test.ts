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

    test('should accept a action sentiment option', () => {
      expect(getBadgeProps({ sentiment: 'action' })).toEqual({
        ...result,
        badge: {
          ...result.badge,
          className: `${baseClass} actionBadge sBadge filledBadge`,
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
