/* eslint-disable react/jsx-key */

import { useMemo } from 'react'
import { useTable } from 'react-table'
import { getTableProps } from '../../../src'
import { tableCols, tableData } from '../data/table.data'

const tableStyles = getTableProps()

export default function Table() {
  const cols = useMemo(() => tableCols, [])
  const data = useMemo(() => tableData, [])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: cols, data })

  // useEffect(() => {
  //   if (props.logJS) {
  //     console.log({
  //       ...getJSButtonProps({
  //         size: 'm',
  //       }),
  //     })
  //   }
  // }, [props.logJS])

  return (
    <div id="table">
      <h3>Table</h3>
      <div className="App-container">
        <table {...getTableProps()} {...tableStyles.table}>
          <caption {...tableStyles.caption}>Some interesting data</caption>

          <thead>
            {headerGroups.map((group) => (
              <tr {...group.getHeaderGroupProps()}>
                {group.headers.map((column) => (
                  <th {...column.getHeaderProps()} {...tableStyles.headCell}>
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} {...tableStyles.bodyCell}>
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
