import { getJSTableProps } from '../../src'

describe('Table JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSTableProps()?.table.cssProps).toContain(
      'border-collapse: separate;'
    )
    expect(getJSTableProps()?.table.styles.borderCollapse).toEqual('separate')
  })
})
