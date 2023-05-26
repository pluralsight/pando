import { getFieldMessageProps } from '@headless-styles'

describe('Field Message CSS', () => {
  const baseClass = 'pando-field-message'

  it('should return the correct className', () => {
    const props = getFieldMessageProps()
    expect(props.className).toContain(baseClass)
  })

  it('should return the id', () => {
    const props = getFieldMessageProps({ id: 'xs' })
    expect(props.id).toEqual('xs')
  })

  it('should allow custom classNames', () => {
    const props = getFieldMessageProps({
      id: 'test',
      classNames: ['xs', 'test'],
    })
    expect(props.className).toContain(baseClass)
    expect(props.className).toContain('xs')
    expect(props.className).toContain('test')
  })
})
