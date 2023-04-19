import { getGridProps, getGridItemProps } from '../../src/index'

describe('Grid CSS', () => {
  const gridProps = {
    className: 'pando-grid gridContainer',
    style: {
      gridTemplateRows: 'repeat(1, 1fr)',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '1rem',
    },
  }
  const gridItemProps = {
    className: 'pando-grid-item gridItem',
    style: {
      gridColumn: 'span 12 / span 12',
    },
  }

  describe('getGridProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getGridProps()).toEqual(gridProps)
    })

    test('should update the gap when option given', () => {
      expect(getGridProps({ gap: 6 })?.style.gap).toEqual('0.375rem')
      expect(getGridProps({ gap: 8 })?.style.gap).toEqual('0.5rem')
      expect(getGridProps({ gap: 12 })?.style.gap).toEqual('0.75rem')
      expect(getGridProps({ gap: 16 })?.style.gap).toEqual('1rem')
      expect(getGridProps({ gap: 32 })?.style.gap).toEqual('2rem')
    })

    test('should update the cols when option given', () => {
      expect(getGridProps({ cols: 12 })?.style.gridTemplateColumns).toEqual(
        'repeat(12, 1fr)'
      )
      expect(getGridProps({ cols: 8 })?.style.gridTemplateColumns).toEqual(
        'repeat(8, 1fr)'
      )
    })
  })

  describe('getGridItemProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getGridItemProps()).toEqual(gridItemProps)
    })

    test('should update the colSpan when option given', () => {
      expect(getGridItemProps({ colSpan: 12 })?.style.gridColumn).toEqual(
        'span 12 / span 12'
      )
      expect(getGridItemProps({ colSpan: 8 })?.style.gridColumn).toEqual(
        'span 8 / span 8'
      )
    })

    test('should update the rowSpan when option given', () => {
      expect(getGridItemProps({ rowSpan: 4 })?.style.gridArea).toEqual(
        'span 4 / span 12 / span 4 / span 12'
      )
    })
  })
})
