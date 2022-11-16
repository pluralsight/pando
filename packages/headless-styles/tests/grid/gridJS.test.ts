import { getJSGridProps, getJSGridItemProps } from '../../src'

describe('Grid JS', () => {
  describe('getJSGridProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSGridProps().cssProps).toContain('display: grid')
      expect(getJSGridProps().styles.display).toEqual('grid')
    })

    test('should accept a cols option', () => {
      expect(getJSGridProps({ cols: 12 }).cssProps).toContain(
        'grid-template-columns: repeat(12, 1fr)'
      )
      expect(getJSGridProps({ cols: 12 }).styles.gridTemplateColumns).toEqual(
        'repeat(12, 1fr)'
      )
    })
  })

  describe('getJSGridItemProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSGridItemProps().cssProps).toContain(
        'grid-column: span 1 / span 1'
      )
      expect(getJSGridItemProps().styles.gridColumn).toEqual('span 1 / span 1')
    })

    test('should accept a colSpan option', () => {
      expect(getJSGridItemProps({ colSpan: 4 }).cssProps).toContain(
        'grid-column: span 4 / span 4'
      )
      expect(getJSGridItemProps({ colSpan: 4 }).styles.gridColumn).toEqual(
        'span 4 / span 4'
      )
    })
  })
})
