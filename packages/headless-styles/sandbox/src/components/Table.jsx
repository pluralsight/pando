// import { useEffect } from 'react'
import { getTableProps } from '../../../src'

const tableStyles = getTableProps()

export default function Table() {
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
        <table {...tableStyles.table}>
          <caption {...tableStyles.caption}>Some interesting data</caption>
          <thead {...tableStyles.thead}>
            <tr {...tableStyles.row}>
              <th {...tableStyles.headCell}>col 1</th>
              <th {...tableStyles.headCell}>col 2</th>
              <th {...tableStyles.headCell}>col 3</th>
              <th {...tableStyles.headCell}>col 4</th>
              <th {...tableStyles.headCell}>col 5</th>
              <th {...tableStyles.headCell}>col 6</th>
            </tr>
          </thead>
          <tbody {...tableStyles.body}>
            <tr {...tableStyles.row}>
              <td {...tableStyles.bodyCell}>Something</td>
              <td {...tableStyles.bodyCell}>Something</td>
              <td {...tableStyles.bodyCell}>Something</td>
              <td {...tableStyles.bodyCell}>Something</td>
              <td {...tableStyles.bodyCell}>Something</td>
              <td {...tableStyles.bodyCell}>Something</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
