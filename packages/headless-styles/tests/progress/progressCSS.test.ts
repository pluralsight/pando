import { getProgressProps } from '../../src'

describe('Progress CSS', () => {
  describe('getProgressProps', () => {
    const baseClass = 'ps-progress'
    const a11yProps = {
      'aria-valuemax': 100,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      role: 'progressbar',
    }
    const result = {
      bar: {
        ...a11yProps,
        className: `${baseClass} bar`,
        style: {
          width: '0%',
        },
      },
      wrapper: {
        className: `${baseClass} sSize linear`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getProgressProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getProgressProps({ kind: 'linear' })).toEqual(result)
      expect(getProgressProps({ kind: 'inset', now: 80 })).toEqual({
        bar: {
          ...a11yProps,
          'aria-valuenow': 80,
          style: {
            width: '80%',
          },
          className: `${baseClass} bar`,
        },
        wrapper: {
          className: `${baseClass} sSize inset`,
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getProgressProps({ tech: 'svelte', now: 60 })).toEqual({
        bar: {
          ...a11yProps,
          'aria-valuenow': 60,
          style: {
            width: '60%',
          },
          class: 'ps-progress bar',
        },
        wrapper: {
          class: 'ps-progress wrapper sSize linear',
        },
      })
    })
  })
})
