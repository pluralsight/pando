import { getGridProps, getGridItemProps } from '../../src/index'

describe('Grid CSS', () => {
  const gridProps = {
    className: 'pando-grid pando_gridContainer',
    style: {
      gridTemplateRows: 'repeat(1, 1fr)',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '1rem',
    },
  }
  const gridItemProps = {
    className: 'pando-grid-item pando_gridItem',
    style: {},
  }

  describe('getGridProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getGridProps()).toEqual(gridProps)
    })

    test('should update the gap when option given', () => {
      expect(getGridProps({ gap: '6' })?.style.gap).toEqual('0.375rem')
      expect(getGridProps({ gap: '8' })?.style.gap).toEqual('0.5rem')
      expect(getGridProps({ gap: '12' })?.style.gap).toEqual('0.75rem')
      expect(getGridProps({ gap: '16' })?.style.gap).toEqual('1rem')
      expect(getGridProps({ gap: '32' })?.style.gap).toEqual('2rem')
      expect(getGridProps({ gap: '0' })?.style.gap).toEqual('0rem')
    })

    test('should accept a number of cols', () => {
      expect(getGridProps({ cols: '8' })?.style.gridTemplateColumns).toEqual(
        'repeat(8, 1fr)'
      )
    })

    test('should accept custom cols', () => {
      expect(
        getGridProps({ cols: '30vw 2fr 1fr' })?.style.gridTemplateColumns
      ).toEqual('30vw 2fr 1fr')
      expect(
        getGridProps({ cols: '10rem' })?.style.gridTemplateColumns
      ).toEqual('10rem')
    })

    test('should accept a number of rows', () => {
      expect(getGridProps({ rows: '5' })?.style.gridTemplateRows).toEqual(
        'repeat(5, 1fr)'
      )
    })

    test('should accept custom rows', () => {
      expect(
        getGridProps({ rows: '5rem 10rem 5rem' })?.style.gridTemplateRows
      ).toEqual('5rem 10rem 5rem')
      expect(getGridProps({ rows: '5rem' })?.style.gridTemplateRows).toEqual(
        '5rem'
      )
    })

    test('should accept custom areas', () => {
      expect(
        getGridProps({
          areas: [
            'header header header',
            'sidebar content content',
            'footer footer footer',
          ],
        })?.style.gridTemplateAreas
      ).toEqual(
        "'header header header' 'sidebar content content' 'footer footer footer'"
      )
    })
  })

  describe('getGridItemProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getGridItemProps()).toEqual(gridItemProps)
    })

    test('should allow for an area option', () => {
      expect(getGridItemProps({ area: 'header' })?.style.gridArea).toEqual(
        'header'
      )
    })

    test('should update the col when option given', () => {
      expect(getGridItemProps({ col: '3 / span 8' })?.style.gridColumn).toEqual(
        '3 / span 8'
      )
    })

    test('should update the row when option given', () => {
      expect(getGridItemProps({ row: 'auto auto' })?.style.gridRow).toEqual(
        'auto auto'
      )
    })
  })
})
