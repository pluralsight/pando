import { getButtonProps } from '../../src'

describe('Button CSS', () => {
  const result = {
    disabled: false,
    className: 'pando-btn filledButton actionButton lButton',
  }

  test('should allow no props to be passed in', () => {
    expect(getButtonProps()).toEqual(result)
  })
})
