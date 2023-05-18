import { getIconButtonProps } from '../../src'

describe('IconButton CSS', () => {
  const result = {
    iconOptions: {
      ariaHidden: true,
      size: 'm',
    },
    button: {
      'aria-label': 'button with icon',
      disabled: false,
      className:
        'pando-icon-btn pando_squareIconButton pando_actionIconButton pando_lIconButton',
    },
  }
  const ariaLabel = result.button['aria-label']

  test('should allow no props to be passed in', () => {
    expect(getIconButtonProps()).toEqual(result)
  })

  test('should allow a action sentiment option', () => {
    expect(
      getIconButtonProps({
        ariaLabel,
        sentiment: 'action',
      })
    ).toEqual(result)
  })

  test('should allow a default sentiment option', () => {
    expect(
      getIconButtonProps({
        ariaLabel,
        sentiment: 'default',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className:
          'pando-icon-btn pando_squareIconButton pando_defaultIconButton pando_lIconButton',
      },
    })
  })

  test('should allow a square usage option', () => {
    expect(
      getIconButtonProps({
        ariaLabel,
        usage: 'square',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className:
          'pando-icon-btn pando_squareIconButton pando_actionIconButton pando_lIconButton',
      },
    })
  })

  test('should allow a round usage option', () => {
    expect(
      getIconButtonProps({
        ariaLabel,
        usage: 'round',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className:
          'pando-icon-btn pando_roundIconButton pando_actionIconButton pando_lIconButton',
      },
    })
  })

  test('should allow a text usage option', () => {
    expect(
      getIconButtonProps({
        ariaLabel,
        usage: 'text',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className:
          'pando-icon-btn pando_textIconButton pando_actionIconButton pando_lIconButton',
      },
    })
  })

  test('should allow a ariaLabel option', () => {
    expect(
      getIconButtonProps({
        ariaLabel: 'test label',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        'aria-label': 'test label',
      },
    })
  })

  test('should allow a classNames option', () => {
    expect(
      getIconButtonProps({
        ariaLabel,
        classNames: ['test-class'],
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: `${result.button.className} test-class`,
      },
    })
  })
})
