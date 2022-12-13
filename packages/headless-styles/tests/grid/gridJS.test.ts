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
        'grid-column: span 12 / span 12'
      )
      expect(getJSGridItemProps().styles.gridColumn).toEqual(
        'span 12 / span 12'
      )
      expect(getJSGridItemProps().cssProps).toContain('min-width: 0')
      expect(getJSGridItemProps().styles.minWidth).toEqual('0')
    })

    test('should accept a colSpan option', () => {
      expect(getJSGridItemProps({ colSpan: 4 }).cssProps).toContain(
        'grid-column: span 4 / span 4'
      )
      expect(getJSGridItemProps({ colSpan: 4 }).styles.gridColumn).toEqual(
        'span 4 / span 4'
      )
      expect(getJSGridItemProps({ colSpan: 4 }).cssProps).toContain(
        'min-width: 0'
      )
      expect(getJSGridItemProps({ colSpan: 4 }).styles.minWidth).toEqual('0')
    })
  })
})
