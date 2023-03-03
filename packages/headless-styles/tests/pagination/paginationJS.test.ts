import { getJSPaginationProps } from '../../src'

describe('getJSPaginationProps', () => {
  test('should accept no options', () => {
    const props = getJSPaginationProps()
    expect(props?.container.cssProps).toContain('display: flex')
    expect(props?.container.styles.display).toEqual('flex')
  })

  test('should accept a "more" kind', () => {
    const props = getJSPaginationProps({ kind: 'more' })
    expect(props?.container.cssProps).toContain('justify-content: center')
    expect(props?.container.styles.justifyContent).toEqual('center')
  })

  test('should accept a "newerOlder" kind', () => {
    const props = getJSPaginationProps({ kind: 'newerOlder' })
    expect(props?.container.cssProps).toContain('justify-content: center')
    expect(props?.container.styles.justifyContent).toEqual('center')
  })

  test('should accept a "bar" kind', () => {
    const props = getJSPaginationProps({ kind: 'bar' })
    expect(props?.container.cssProps).toContain('justify-content: flex-end')
    expect(props?.container.styles.justifyContent).toEqual('flex-end')
  })
})
