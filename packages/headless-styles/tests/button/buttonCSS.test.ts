import { getButtonProps } from '../../src'

describe('Button CSS', () => {
  const result = {
    button: {
      'data-disabled': false,
      className: 'ps-btn filledButton actionButton lButton',
    },
  }
  const iconResult = {
    ...result,
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      customSize: '1.125rem',
      tech: '',
    },
    icon: {
      className: 'ps-btn-icon btnIcon',
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
        className: 'ps-btn filledButton defaultButton lButton',
      },
    })
  })

  test('should allow a action sentiment', () => {
    expect(
      getButtonProps({
        sentiment: 'action',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'ps-btn filledButton actionButton lButton',
      },
    })
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
        className: 'ps-btn filledButton dangerButton lButton',
      },
    })
  })

  test('should allow a filled usage', () => {
    expect(
      getButtonProps({
        usage: 'filled',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'ps-btn filledButton actionButton lButton',
      },
    })
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
        className: 'ps-btn outlineButton actionButton lButton',
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
        className: 'ps-btn textButton actionButton lButton',
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
        className: 'ps-btn filledButton actionButton mButton',
      },
    })
  })

  test('should allow a l size', () => {
    expect(
      getButtonProps({
        size: 'l',
      })
    ).toEqual({
      ...result,
      button: {
        ...result.button,
        className: 'ps-btn filledButton actionButton lButton',
      },
    })
  })

  test('should allow a right icon option', () => {
    expect(
      getButtonProps({
        icon: 'right',
      })
    ).toEqual(iconResult)
  })

  test('should allow a left icon option', () => {
    expect(
      getButtonProps({
        icon: 'left',
      })
    ).toEqual(iconResult)
  })

  test('should allow a tech option', () => {
    expect(
      getButtonProps({
        tech: 'svelte',
      })
    ).toEqual({
      ...result,
      button: {
        'data-disabled': false,
        class: 'ps-btn btnBase filledButton actionButton lButton',
      },
    })
  })
})
