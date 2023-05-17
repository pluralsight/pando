import { getTextareaProps } from '../../src'

describe('Textarea CSS', () => {
  const baseClass = 'pando-textarea'
  const options = {
    id: 'test-id',
    name: 'test-name',
    placeholder: 'test placeholder',
    value: '',
  }
  const result = {
    ['aria-invalid']: false,
    ['data-invalid']: false,
    ['data-readonly']: false,
    ['data-required']: false,
    disabled: false,
    id: options.id,
    name: options.name,
    placeholder: options.placeholder,
    readOnly: false,
    required: false,
    value: options.value,
    className: `${baseClass} pando_initialTextarea`,
  }

  test('should allow no props to be passed in', () => {
    expect(getTextareaProps()).toEqual({
      ...result,
      id: '',
      name: '',
      placeholder: 'Enter text',
    })
  })

  test('should accept a resize type', () => {
    expect(getTextareaProps({ ...options, resize: 'initial' })).toEqual(result)
    expect(getTextareaProps({ ...options, resize: 'horizontal' })).toEqual({
      ...result,
      className: `${baseClass} pando_horizontalTextarea`,
    })
    expect(getTextareaProps({ ...options, resize: 'vertical' })).toEqual({
      ...result,
      className: `${baseClass} pando_verticalTextarea`,
    })
    expect(getTextareaProps({ ...options, resize: 'none' })).toEqual({
      ...result,
      className: `${baseClass} pando_noneTextarea`,
    })
  })

  test('should accept a classNames array', () => {
    expect(getTextareaProps({ ...options, classNames: ['test'] })).toEqual({
      ...result,
      className: `${baseClass} pando_initialTextarea test`,
    })
  })
})
