import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicTablePreview() {
  return (
    <CodeBlock>{`<table {...tableStyles.table}>
  <caption {...tableStyles.caption}>An example of a table.</caption>
  <thead>
    <tr {...tableStyles.row}>
      <th {...tableStyles.headCell}>One</th>
      <th {...tableStyles.headCell}>Two</th>
      <th {...tableStyles.headCell}>Three</th>
    </tr>
  </thead>
  <tbody>
    <tr {...tableStyles.row}>
      <td {...tableStyles.bodyCell}>Hello</td>
      <td {...tableStyles.bodyCell}>There</td>
      <td {...tableStyles.bodyCell}>d00d</td>
    </tr>
  </tbody>
</table>`}</CodeBlock>
  )
}

export function BasicTableFullPreview() {
  return (
    <CodeBlock>{`import { getTableProps } from '@pluralsight/headless-styles'

const tableStyles = getTableProps()

export function Table(props) {
  return (
    <table {...tableStyles.table}>{props.children}</table>
  )
}

export function Caption(props) {
  return (
    <caption {...tableStyles.caption}>{props.children}</caption>
  )
}

export function TableRow(props) {
  return (
    <tr {...tableStyles.row}>{props.children}</tr>
  )
}

export function HeadCell(props) {
  return (
    <th {...tableStyles.headCell}>{props.children}</th>
  )
}

export function BodyCell(props) {
  return (
    <td {...tableStyles.bodyCell}>{props.children}</td>
  )
}`}</CodeBlock>
  )
}
