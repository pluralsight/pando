import { useMemo } from 'react'
import { useTable } from 'react-table'
import {
  getTableProps,
  getTableBodyCellProps,
  getTableCaptionProps,
  getTableHeadCellProps,
  getTableRowProps,
} from '../../../src'
import { tableCols, tableData } from '../data/table.data'

export default function Table() {
  const cols = useMemo(() => tableCols, [])
  const data = useMemo(() => tableData, [])
  const {
    getTableProps: getUseTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: cols, data })

  return (
    <div id="table">
      <h3>Table</h3>
      <div className="App-container">
        <table {...getUseTableProps()} {...getTableProps()}>
          <caption {...getTableCaptionProps()}>Some interesting data</caption>

          <thead>
            {headerGroups.map((group) => (
              <tr {...group.getHeaderGroupProps()} {...getTableRowProps()}>
                {group.headers.map((column) => (
                  <th {...column.getHeaderProps()} {...getTableHeadCellProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} {...getTableRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} {...getTableBodyCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
