import React from 'react'
import { getTableProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const tableStyles = getTableProps()

function Table(props) {
  return <table {...tableStyles.table}>{props.children}</table>
}

function Caption(props) {
  return <caption {...tableStyles.caption}>{props.children}</caption>
}

function TableRow(props) {
  return <tr {...tableStyles.row}>{props.children}</tr>
}

function HeadCell(props) {
  return <th {...tableStyles.headCell}>{props.children}</th>
}

function BodyCell(props) {
  return <td {...tableStyles.bodyCell}>{props.children}</td>
}

export default function BasicTable() {
  return (
    <Container>
      <Table>
        <Caption>An example of a table</Caption>
        <thead>
          <TableRow>
            <HeadCell>One</HeadCell>
            <HeadCell>Three</HeadCell>
            <HeadCell>Two</HeadCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <BodyCell>Hello</BodyCell>
            <BodyCell>There</BodyCell>
            <BodyCell>d00d</BodyCell>
          </TableRow>
          <TableRow>
            <BodyCell>Hello 1</BodyCell>
            <BodyCell>There 1</BodyCell>
            <BodyCell>d00d 1</BodyCell>
          </TableRow>
          <TableRow>
            <BodyCell>Hello 2</BodyCell>
            <BodyCell>There 2</BodyCell>
            <BodyCell>d00d 2</BodyCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  )
}
