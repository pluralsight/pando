import { getErrorMessageProps } from '../../src'

describe('ErrorMessage CSS', () => {
  const baseClass = 'ps-error-message'
  const message = 'We do not speak his name.'
  const id = 'voldemort:1'
  const result = {
    container: {
      'aria-live': 'polite',
      id,
    },
    message: {
      className: `${baseClass} size-xs errorMessage`,
      value: message,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getErrorMessageProps()).toEqual({
      ...result,
      container: {
        ...result.container,
        id: '',
      },
      message: {
        ...result.message,
        value: '',
      },
    })
  })

  test('should accept a invalid option', () => {
    expect(getErrorMessageProps({ id, invalid: true, message })).toEqual(result)
  })
})
