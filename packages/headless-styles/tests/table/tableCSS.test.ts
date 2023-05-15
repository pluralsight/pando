import {
  getTableProps,
  getTableBodyCellProps,
  getTableCaptionProps,
  getTableHeadCellProps,
  getTableRowProps,
} from '@headless-styles'

describe('Table CSS', () => {
  test('getTableProps', () => {
    expect(getTableProps()).toEqual({
      className: 'pando-table table',
    })
  })

  test('getTableProps with custom classNames', () => {
    expect(getTableProps({ classNames: ['custom'] })).toEqual({
      className: 'pando-table table custom',
    })
  })

  test('getTableBodyCellProps', () => {
    expect(getTableBodyCellProps()).toEqual({
      className: 'pando-table-body-cell bodyCell',
    })
  })

  test('getTableBodyCellProps with custom classNames', () => {
    expect(getTableBodyCellProps({ classNames: ['custom'] })).toEqual({
      className: 'pando-table-body-cell bodyCell custom',
    })
  })

  test('getTableCaptionProps', () => {
    expect(getTableCaptionProps()).toEqual({
      className: 'pando-table-caption caption',
    })
  })

  test('getTableCaptionProps with custom classNames', () => {
    expect(getTableCaptionProps({ classNames: ['custom'] })).toEqual({
      className: 'pando-table-caption caption custom',
    })
  })

  test('getTableHeadCellProps', () => {
    expect(getTableHeadCellProps()).toEqual({
      className: 'pando-table-head-cell headCell',
      scope: 'col',
    })
  })

  test('getTableHeadCellProps with custom classNames', () => {
    expect(getTableHeadCellProps({ classNames: ['custom'] })).toEqual({
      className: 'pando-table-head-cell headCell custom',
      scope: 'col',
    })
  })

  test('getTableRowProps', () => {
    expect(getTableRowProps()).toEqual({
      className: 'pando-table-row tableRow',
    })
  })

  test('getTableRowProps with custom classNames', () => {
    expect(getTableRowProps({ classNames: ['custom'] })).toEqual({
      className: 'pando-table-row tableRow custom',
    })
  })
})
