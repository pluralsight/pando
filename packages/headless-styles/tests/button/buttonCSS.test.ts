import { getButtonProps, getButtonIconOptions } from '../../src'

describe('Button CSS', () => {
  const result = {
    disabled: false,
    className: 'pando-btn filledButton actionButton lButton',
  }
  const iconResult = {
    ariaHidden: true,
    size: 'm',
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
      className: 'pando-btn filledButton defaultButton lButton',
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
      className: 'pando-btn filledButton dangerButton lButton',
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
      className: 'pando-btn outlineButton actionButton lButton',
    })
  })

  test('should allow a text usage', () => {
    expect(
      getButtonProps({
        usage: 'text',
      })
    ).toEqual({
      ...result,
      className: 'pando-btn textButton actionButton lButton',
    })
  })

  test('should allow a m size', () => {
    expect(
      getButtonProps({
        size: 'm',
      })
    ).toEqual({
      ...result,
      className: 'pando-btn filledButton actionButton mButton',
    })
  })

  test('should allow a l size', () => {
    expect(
      getButtonProps({
        size: 'l',
      })
    ).toEqual(result)
  })

  test('should display a disabled state if provided', () => {
    expect(
      getButtonProps({
        disabled: true,
      })
    ).toEqual({
      ...result,
      disabled: true,
      className: 'pando-btn filledButton actionButton lButton',
    })
  })

  test('should allow a custom class name', () => {
    expect(getButtonProps({ classNames: ['custom'] })).toEqual({
      ...result,
      className: 'pando-btn filledButton actionButton lButton custom',
    })
  })

  test('should return m icon options', () => {
    expect(getButtonIconOptions('m')).toEqual({
      ...iconResult,
      size: 's',
    })
  })

  test('should return l icon options', () => {
    expect(getButtonIconOptions('l')).toEqual({
      ...iconResult,
    })
  })
})
