import { getFieldMessageProps } from '../../src'

describe('Field Message CSS', () => {
  const baseClass = 'ps-field-message'
  const message = 'Ice rules d00d.'
  const id = 'rocko:1'
  const result = {
    id,
    className: `${baseClass} size-xs fieldMessage`,
    value: message,
  }

  test('should allow no props to be passed in', () => {
    expect(getFieldMessageProps()).toEqual({
      ...result,
      id: '',
      value: '',
    })
  })

  test('should accept a message option', () => {
    expect(getFieldMessageProps({ id, message })).toEqual(result)
  })
})
