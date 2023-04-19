import { getButtonProps } from '../../src'

describe('Button CSS', () => {
  const result = {
    button: {
      disabled: false,
      className: 'pando-btn filledButton actionButton lButton',
    },
  }
  const iconResult = {
    ...result,
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      size: 'm',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getButtonProps()).toEqual(result)
  })

  test('should allow a default sentiment', () => {
    expect(
      getButtonProps({
        sentiment: 'default',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'pando-btn filledButton defaultButton lButton',
      },
    })
  })

  test('should allow a action sentiment', () => {
    expect(
      getButtonProps({
        sentiment: 'action',
      })
    ).toEqual(result)
  })

  test('should allow a danger sentiment', () => {
    expect(
      getButtonProps({
        sentiment: 'danger',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'pando-btn filledButton dangerButton lButton',
      },
    })
  })

  test('should allow a filled usage', () => {
    expect(
      getButtonProps({
        usage: 'filled',
      })
    ).toEqual(result)
  })

  test('should allow a outline usage', () => {
    expect(
      getButtonProps({
        usage: 'outline',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'pando-btn outlineButton actionButton lButton',
      },
    })
  })

  test('should allow a text usage', () => {
    expect(
      getButtonProps({
        usage: 'text',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'pando-btn textButton actionButton lButton',
      },
    })
  })

  test('should allow a m size', () => {
    expect(
      getButtonProps({
        size: 'm',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'pando-btn filledButton actionButton mButton',
      },
    })
  })

  test('should allow a l size', () => {
    expect(
      getButtonProps({
        size: 'l',
      })
    ).toEqual(result)
  })

  test('should allow a end icon option', () => {
    expect(
      getButtonProps({
        icon: 'end',
      })
    ).toEqual(iconResult)
  })

  test('should allow a start icon option', () => {
    expect(
      getButtonProps({
        icon: 'start',
      })
    ).toEqual(iconResult)
  })

  test('should display a disabled state if provided', () => {
    expect(
      getButtonProps({
        disabled: true,
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        disabled: true,
        className: 'pando-btn filledButton actionButton lButton',
      },
    })
  })

  test('should allow a custom class name', () => {
    expect(getButtonProps({ classNames: ['custom'] })).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'pando-btn filledButton actionButton lButton custom',
      },
    })
  })
})
