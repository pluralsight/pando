import { getProgressProps } from '../../src'

describe('Progress CSS', () => {
  describe('getProgressProps', () => {
    const baseClass = 'ps-progress'
    const ariaLabel = 'test progress bar'
    const a11yProps = {
      'aria-label': ariaLabel,
      'aria-valuemax': 100,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      role: 'progressbar',
    }
    const result = {
      bar: {
        ...a11yProps,
        className: `${baseClass} sSize linear`,
        style: {
          width: '0%',
        },
      },
      wrapper: {
        className: `${baseClass} wrapper sSize linear`,
      },
    }

    test('should accept an ariaLabel', () => {
      expect(getProgressProps({ ariaLabel: 'test aria label' })).toEqual({
        ...result,
        bar: { ...result.bar, 'aria-label': 'test aria label' },
      })
    })

    test('should accept a kind type', () => {
      expect(getProgressProps({ ariaLabel, kind: 'linear' })).toEqual(result)
      expect(getProgressProps({ ariaLabel, kind: 'inset', now: 80 })).toEqual({
        bar: {
          ...a11yProps,
          'aria-valuenow': 80,
          style: {
            width: '80%',
          },
          className: `${baseClass} sSize inset`,
        },
        wrapper: {
          className: `${baseClass} wrapper sSize inset`,
        },
      })
    })
  })
})
