import { getTagProps } from '../../src'

describe('Tag CSS', () => {
  const baseClass = 'ps-tag'
  const defaultResult = {
    iconOptions: {
      ariaHidden: true,
      size: 'm',
      tech: '',
    },
    tag: {
      className: `${baseClass} mTag`,
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
        className: `${baseClass} sTag`,
      },
    })
  })

  test('should accept a m size option', () => {
    expect(getTagProps({ size: 'm' })).toEqual(defaultResult)
  })

  test('should accept a tech type', () => {
    expect(getTagProps({ tech: 'svelte' })).toEqual({
      ...defaultResult,
      iconOptions: {
        ...defaultResult.iconOptions,
        tech: 'svelte',
      },
      tag: {
        class: 'ps-tag baseTag mTag',
      },
    })
  })
})
