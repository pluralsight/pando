import {
  getAvatarProps,
  getAvatarImageProps,
  getAvatarIconOptions,
} from '../../src'

describe('Avatar CSS', () => {
  const baseClass = 'pando-avatar'
  const imgSrc = 'https://i.pravatar.cc/300'

  test('should allow no props to be passed in', () => {
    expect(getAvatarProps()).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar mAvatar`,
      },
    })
  })

  test('should accept a default sentiment type', () => {
    expect(getAvatarProps({ sentiment: 'default' })).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar mAvatar`,
      },
    })
  })

  test('should accept a action sentiment type', () => {
    expect(getAvatarProps({ sentiment: 'action' })).toEqual({
      wrapper: {
        className: `${baseClass} actionAvatar mAvatar`,
      },
    })
  })

  test('should accept an xs size option', () => {
    expect(getAvatarProps({ size: 'xs' })).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar xsAvatar`,
      },
    })
  })

  test('should accept an s size option', () => {
    expect(getAvatarProps({ size: 's' })).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar sAvatar`,
      },
    })
  })

  test('should accept an m size option', () => {
    expect(getAvatarProps({ size: 'm' })).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar mAvatar`,
      },
    })
  })

  test('should accept an l size option', () => {
    expect(getAvatarProps({ size: 'l' })).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar lAvatar`,
      },
    })
  })

  test('should accept an xl size option', () => {
    expect(getAvatarProps({ size: 'xl' })).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar xlAvatar`,
      },
    })
  })

  test('should allow a custom className to be passed in', () => {
    expect(getAvatarProps({ classNames: ['customClassName'] })).toEqual({
      wrapper: {
        className: `${baseClass} defaultAvatar mAvatar customClassName`,
      },
    })
  })

  test('should return an image props object', () => {
    expect(
      getAvatarImageProps({
        alt: 'alt text',
        src: imgSrc,
      })
    ).toEqual({
      className: `${baseClass}-image avatarImage`,
      alt: 'alt text',
      src: imgSrc,
    })
  })

  test('should return an image props object with a custom className', () => {
    expect(
      getAvatarImageProps({
        alt: 'alt text',
        src: imgSrc,
        classNames: ['customClassName'],
      })
    ).toEqual({
      className: `${baseClass}-image avatarImage customClassName`,
      alt: 'alt text',
      src: imgSrc,
    })
  })

  test('should return an xs icon options object', () => {
    expect(getAvatarIconOptions('xs')).toEqual({
      ariaHidden: true,
      customSize: '1.5rem',
    })
  })

  test('should return an s icon options object', () => {
    expect(getAvatarIconOptions('s')).toEqual({
      ariaHidden: true,
      customSize: '2.5rem',
    })
  })

  test('should return an m icon options object', () => {
    expect(getAvatarIconOptions('m')).toEqual({
      ariaHidden: true,
      customSize: '4rem',
    })
  })

  test('should return an l icon options object', () => {
    expect(getAvatarIconOptions('l')).toEqual({
      ariaHidden: true,
      customSize: '6rem',
    })
  })

  test('should return an sl icon options object', () => {
    expect(getAvatarIconOptions('xl')).toEqual({
      ariaHidden: true,
      customSize: '8rem',
    })
  })
})
