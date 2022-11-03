import { getJSPaginationProps } from '../../src'

describe('getJSPaginationProps', () => {
  test('should accept no options', () => {
    const props = getJSPaginationProps()
    expect(props?.container.cssProps).toContain('display: grid')
    expect(props?.container.styles.display).toEqual('grid')
  })
})
