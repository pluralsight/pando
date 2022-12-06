import { getIconButtonProps } from '../../src'

describe('IconButton CSS', () => {
  const result = {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: 'button with icon',
      size: 'm',
    },
    button: {
      'aria-label': 'button with icon',
      'data-disabled': false,
      className:
        'ps-icon-btn btnBase squareIconButton actionIconButton lIconButton',
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
          'ps-icon-btn btnBase squareIconButton defaultIconButton lIconButton',
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
          'ps-icon-btn btnBase squareIconButton actionIconButton lIconButton',
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
          'ps-icon-btn btnBase roundIconButton actionIconButton lIconButton',
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
          'ps-icon-btn btnBase textIconButton actionIconButton lIconButton',
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
})
