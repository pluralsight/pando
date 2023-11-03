import { type ReactNode, useMemo } from 'react'
import { useTable } from 'react-table'
import { Table, Caption, THead, TH, TBody, TR, TD } from '@pluralsight/react'

import { tableCols, tableData } from '../data/table.data'

export default function TablePage() {
  const cols = useMemo(() => tableCols, [])
  const data = useMemo(() => tableData, [])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: cols, data })

  return (
    <div id="table">
      <h3>Table</h3>

      <div className="App-container">
        <Table {...getTableProps()}>
          <Caption>Some interesting data</Caption>

          <THead>
            {headerGroups.map((group) => (
              <TR {...group.getHeaderGroupProps()}>
                {group.headers.map((column) => (
                  <TH {...column.getHeaderProps()}>
                    {column.render('Header') as ReactNode}
                  </TH>
                ))}
              </TR>
            ))}
          </THead>

          <TBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <TR {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TD {...cell.getCellProps()}>
                        {cell.render('Cell') as ReactNode}
                      </TD>
                    )
                  })}
                </TR>
              )
            })}
          </TBody>
        </Table>
      </div>
    </div>
  )
}
