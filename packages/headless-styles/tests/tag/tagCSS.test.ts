import { getTagProps } from '../../src'

describe('Tag CSS', () => {
  const baseClass = 'pando-tag'
  const defaultResult = {
    iconOptions: {
      ariaHidden: true,
      size: 'm',
    },
    tag: {
      className: `${baseClass} pando_mTag`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getTagProps()).toEqual(defaultResult)
  })

  test('should accept a s size option', () => {
    expect(getTagProps({ size: 's' })).toEqual({
      ...defaultResult,
      iconOptions: {
        ...defaultResult.iconOptions,
        size: 's',
      },
      tag: {
        className: `${baseClass} pando_sTag`,
      },
    })
  })

  test('should accept a m size option', () => {
    expect(getTagProps({ size: 'm' })).toEqual(defaultResult)
  })

  test('should accept a classNames option', () => {
    expect(getTagProps({ classNames: ['test'] })).toEqual({
      ...defaultResult,
      tag: {
        className: `${baseClass} pando_mTag test`,
      },
    })
  })
})
