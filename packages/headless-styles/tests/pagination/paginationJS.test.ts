import { getJSPaginationProps } from '../../src'

describe('getJSPaginationProps', () => {
  test('should accept no options', () => {
    const props = getJSPaginationProps()
    expect(props?.container.cssProps).toContain('padding-bottom: 1.5rem')
    expect(props?.container.styles.paddingBottom).toEqual('1.5rem')
  })
})
