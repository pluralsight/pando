import { getAvatarLabelProps } from '../../src'

describe('Avatar Label', () => {
  const baseClass = 'pando-avatar'
  const name = 'John Doe'
  const value = 'JD'

  test('should return a xs label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'xs',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label avatarLabel xsAvatarLabel`,
      value,
    })
  })

  test('should return a s label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 's',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label avatarLabel sAvatarLabel`,
      value,
    })
  })

  test('should return a m label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'm',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label avatarLabel mAvatarLabel`,
      value,
    })
  })

  test('should return a l label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'l',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label avatarLabel lAvatarLabel`,
      value,
    })
  })

  test('should return a xl label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'xl',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label avatarLabel xlAvatarLabel`,
      value,
    })
  })
})
