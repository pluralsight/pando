import { getAdmonitionProps } from '../../src'

describe('Admonition CSS', () => {
  const baseClass = 'ps-admonition'
  const result = {
    iconButtonOptions: {
      ariaLabel: 'Close admonition',
      usage: 'text',
      size: 'm',
    },
    iconOptions: {
      size: 'm',
    },
    description: {
      className: `${baseClass}-description admonitionDescription`,
    },
    iconWrapper: {
      className: `${baseClass}-icon infoIconWrapper`,
    },
    textContainer: {
      className: `${baseClass}-text-container infoTextContainer`,
    },
    title: {
      className: `${baseClass}-title admonitionTitle`,
    },
    wrapper: {
      className: `${baseClass} infoAdmonition`,
      role: 'region',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getAdmonitionProps()).toEqual(result)
  })

  test('should accept a info sentiment option', () => {
    expect(getAdmonitionProps({ sentiment: 'info' })).toEqual(result)
  })

  test('should accept a success sentiment option', () => {
    expect(getAdmonitionProps({ sentiment: 'success' })).toEqual({
      ...result,
      iconWrapper: {
        ...result.iconWrapper,
        className: `${baseClass}-icon successIconWrapper`,
      },
      textContainer: {
        ...result.textContainer,
        className: `${baseClass}-text-container successTextContainer`,
      },
      wrapper: {
        ...result.wrapper,
        className: `${baseClass} successAdmonition`,
      },
    })
  })

  test('should accept a warning sentiment option', () => {
    expect(getAdmonitionProps({ sentiment: 'warning' })).toEqual({
      ...result,
      iconWrapper: {
        ...result.iconWrapper,
        className: `${baseClass}-icon warningIconWrapper`,
      },
      textContainer: {
        ...result.textContainer,
        className: `${baseClass}-text-container warningTextContainer`,
      },
      wrapper: {
        ...result.wrapper,
        className: `${baseClass} warningAdmonition`,
      },
    })
  })

  test('should accept a danger sentiment option', () => {
    expect(getAdmonitionProps({ sentiment: 'danger' })).toEqual({
      ...result,
      iconWrapper: {
        ...result.iconWrapper,
        className: `${baseClass}-icon dangerIconWrapper`,
      },
      textContainer: {
        ...result.textContainer,
        className: `${baseClass}-text-container dangerTextContainer`,
      },
      wrapper: {
        ...result.wrapper,
        className: `${baseClass} dangerAdmonition`,
      },
    })
  })
})
