import { getJSPaginationProps } from '../../src'

describe('getJSPaginationProps', () => {
  test('should accept no options', () => {
    const props = getJSPaginationProps()
    expect(props?.container.cssProps).toContain('column-gap: 2rem;')
    expect(props?.container.styles.columnGap).toEqual('2rem')
  })

  test('should accept an "m" size option', () => {
    const props = getJSPaginationProps({ size: 'm' })
    expect(props?.container.cssProps).toContain('column-gap: 1rem;')
    expect(props?.container.styles.columnGap).toEqual('1rem')
  })
})
