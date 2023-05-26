import { getErrorMessageProps } from '@headless-styles'

describe('ErrorMessage CSS', () => {
  const baseClass = 'pando-error-message'
  const id = 'voldemort:1'

  it('should return the correct className', () => {
    const props = getErrorMessageProps({ id })
    expect(props.className).toContain(baseClass)
  })

  it('should return the id', () => {
    const props = getErrorMessageProps({ id: 'xs' })
    expect(props.id).toEqual('xs')
  })

  it('should return the a11y props', () => {
    const props = getErrorMessageProps({ id })
    expect(props['aria-live']).toEqual('polite')
  })

  it('should allow custom classNames', () => {
    const props = getErrorMessageProps({
      id: 'test',
      classNames: ['xs', 'test'],
    })
    expect(props.className).toContain(baseClass)
    expect(props.className).toContain('xs')
    expect(props.className).toContain('test')
  })
})
