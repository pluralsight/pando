import {
  getAdmonitionProps,
  getAdmonitionHeadingProps,
  getAdmonitionTextProps,
  getAdmonitionIconProps,
  getAdmonitionCloseButtonProps,
} from '../../src'

describe('Admonition CSS', () => {
  const baseClass = 'pando-admonition'
  const result = {
    iconWrapper: {
      className: `${baseClass}-icon infoIconWrapper`,
    },
    textContainer: {
      className: `${baseClass}-text-container infoTextContainer`,
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

  test('should return the props for a heading', () => {
    expect(getAdmonitionHeadingProps()).toEqual({
      className: `${baseClass}-heading admonitionTitle`,
    })
  })

  test('should return the props for a heading with a custom class', () => {
    expect(getAdmonitionHeadingProps(['custom'])).toEqual({
      className: `${baseClass}-heading admonitionTitle custom`,
    })
  })

  test('should return the props for a text', () => {
    expect(getAdmonitionTextProps()).toEqual({
      className: `${baseClass}-text admonitionDescription`,
    })
  })

  test('should return the props for a text with a custom class', () => {
    expect(getAdmonitionTextProps(['custom'])).toEqual({
      className: `${baseClass}-text admonitionDescription custom`,
    })
  })

  test('should return the correct icon options', () => {
    expect(getAdmonitionIconProps()).toEqual({
      ariaHidden: true,
      size: 'm',
    })
  })

  test('should return the correct icon button options', () => {
    expect(getAdmonitionCloseButtonProps()).toEqual({
      ariaLabel: 'Close admonition',
      classNames: [],
      usage: 'text',
      size: 'm',
    })
  })

  test('should return the correct icon button options with a custom class', () => {
    expect(getAdmonitionCloseButtonProps(['custom'])).toEqual({
      ariaLabel: 'Close admonition',
      classNames: ['custom'],
      usage: 'text',
      size: 'm',
    })
  })
})
