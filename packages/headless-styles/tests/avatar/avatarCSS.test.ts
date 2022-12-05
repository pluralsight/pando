import { getAvatarProps } from '../../src'

describe('Avatar CSS -> getAvatarProps', () => {
  const baseClass = 'ps-avatar'
  const options = {
    label: 'test avatar',
    src: '',
  }
  const defaultResult = {
    iconOptions: {
      ariaLabel: options.label,
      ariaHidden: true,
      customSize: '4rem',
    },
    wrapper: {
      className: `${baseClass} defaultAvatar mAvatar`,
    },
    image: {
      alt: options.label,
      src: '',
      className: `${baseClass}-image avatarImage`,
    },
    label: {
      'aria-label': options.label,
      className: `${baseClass}-label avatarLabel mAvatarLabel`,
      value: 'ta',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getAvatarProps()).toEqual({
      ...defaultResult,
      iconOptions: {
        ...defaultResult.iconOptions,
        ariaLabel: '',
      },
      image: {
        ...defaultResult.image,
        alt: '',
      },
      label: {
        ...defaultResult.label,
        'aria-label': '',
        value: '',
      },
    })
  })

  test('should accept a default sentiment type', () => {
    expect(getAvatarProps({ sentiment: 'default', ...options })).toEqual(
      defaultResult
    )
  })

  test('should accept a action sentiment type', () => {
    expect(getAvatarProps({ sentiment: 'action', ...options })).toEqual({
      ...defaultResult,
      wrapper: {
        ...defaultResult.wrapper,
        className: `${baseClass} actionAvatar mAvatar`,
      },
    })
  })

  test('should accept an xs size option', () => {
    expect(getAvatarProps({ size: 'xs', ...options })).toEqual({
      ...defaultResult,
      wrapper: {
        ...defaultResult.wrapper,
        className: `${baseClass} defaultAvatar xsAvatar`,
      },
      label: {
        ...defaultResult.label,
        className: `${baseClass}-label avatarLabel xsAvatarLabel`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '1.5rem',
      },
    })
  })

  test('should accept an s size option', () => {
    expect(getAvatarProps({ size: 's', ...options })).toEqual({
      ...defaultResult,
      wrapper: {
        ...defaultResult.wrapper,
        className: `${baseClass} defaultAvatar sAvatar`,
      },
      label: {
        ...defaultResult.label,
        className: `${baseClass}-label avatarLabel sAvatarLabel`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '2.5rem',
      },
    })
  })

  test('should accept an m size option', () => {
    expect(getAvatarProps({ size: 'm', ...options })).toEqual(defaultResult)
  })

  test('should accept an l size option', () => {
    expect(getAvatarProps({ size: 'l', ...options })).toEqual({
      ...defaultResult,
      wrapper: {
        ...defaultResult.wrapper,
        className: `${baseClass} defaultAvatar lAvatar`,
      },
      label: {
        ...defaultResult.label,
        className: `${baseClass}-label avatarLabel lAvatarLabel`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '6rem',
      },
    })
  })

  test('should accept an xl size option', () => {
    expect(getAvatarProps({ size: 'xl', ...options })).toEqual({
      ...defaultResult,
      wrapper: {
        ...defaultResult.wrapper,
        className: `${baseClass} defaultAvatar xlAvatar`,
      },
      label: {
        ...defaultResult.label,
        className: `${baseClass}-label avatarLabel xlAvatarLabel`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '8rem',
      },
    })
  })
})
