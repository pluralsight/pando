import { getIconProps } from '../../src'

describe('Icon CSS', () => {
  const baseClass = 'pando-icon'
  const result = {
    'aria-hidden': true,
    className: `${baseClass} pando_mIconSize`,
    role: 'img',
  }

  test('should allow no props to be passed in', () => {
    expect(getIconProps()).toEqual(result)
  })

  test('should accept a size type', () => {
    expect(getIconProps({ size: 's' })).toEqual({
      ...result,
      className: `${baseClass} pando_sIconSize`,
    })
    expect(getIconProps({ size: 'm' })).toEqual(result)
    expect(getIconProps({ size: 'l' })).toEqual({
      ...result,
      className: `${baseClass} pando_lIconSize`,
    })
  })

  test('should accept a custom size', () => {
    expect(getIconProps({ customSize: '5rem' })).toEqual({
      ...result,
      className: 'pando-icon pando_customIconSize',
      height: '5rem',
      width: '5rem',
    })
  })

  test('should accept an ariaLabel when not hidden', () => {
    expect(getIconProps({ ariaHidden: false, ariaLabel: 'my label' })).toEqual({
      ...result,
      'aria-hidden': false,
      'aria-label': 'my label',
    })
  })

  test('should not accept an ariaLabel if hidden', () => {
    expect(getIconProps({ ariaHidden: true })).toEqual({
      ...result,
      'aria-hidden': true,
    })
  })

  test('should allow a custom class to be passed in', () => {
    expect(getIconProps({ classNames: ['myClass'] })).toEqual({
      ...result,
      className: `${baseClass} pando_mIconSize myClass`,
    })
  })
})
