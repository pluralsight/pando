import { forwardRef, type HTMLAttributes, type ForwardedRef } from 'react'
import {
  getTableProps,
  getTableCaptionProps,
  getTableHeadCellProps,
  getTableBodyCellProps,
  getTableRowProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'

// <Table />

type TableProps = HTMLAttributes<HTMLTableElement>

function TableEl(props: TableProps, ref: ForwardedRef<HTMLTableElement>) {
  const { children, ...nativeProps } = props
  const pandoProps = getTableProps({
    classNames: splitClassNameProp(props.className),
  })

  return (
    <table {...nativeProps} {...pandoProps} ref={ref}>
      {children}
    </table>
  )
}

// <Caption />

type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>

function TableCaptionEl(
  props: TableCaptionProps,
  ref: ForwardedRef<HTMLTableCaptionElement>
) {
  const { children, ...nativeProps } = props
  const pandoProps = getTableCaptionProps({
    classNames: splitClassNameProp(props.className),
  })

  return (
    <caption {...nativeProps} {...pandoProps} ref={ref}>
      {children}
    </caption>
  )
}

// <THead />

// There is no styling needed for the table head, but we need to
// include it in the API for completeness.

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

function TableHeadEl(
  props: TableHeadProps,
  ref: ForwardedRef<HTMLTableSectionElement>
) {
  return <thead {...props} ref={ref} />
}

// <TH />

type TableHeadCellProps = HTMLAttributes<HTMLTableCellElement>

function TableHeadCellEl(
  props: TableHeadCellProps,
  ref: ForwardedRef<HTMLTableCellElement>
) {
  const { children, ...nativeProps } = props
  const pandoProps = getTableHeadCellProps({
    classNames: splitClassNameProp(props.className),
  })

  return (
    <th {...nativeProps} {...pandoProps} ref={ref}>
      {children}
    </th>
  )
}

// <TBody />

// There is no styling needed for the table body, but we need to
// include it in the API for completeness.

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>

function TableBodyEl(
  props: TableBodyProps,
  ref: ForwardedRef<HTMLTableSectionElement>
) {
  return <tbody {...props} ref={ref} />
}

// <TR />

type TableRowProps = HTMLAttributes<HTMLTableRowElement>

function TableRowEl(
  props: TableRowProps,
  ref: ForwardedRef<HTMLTableRowElement>
) {
  const { children, ...nativeProps } = props
  const pandoProps = getTableRowProps({
    classNames: splitClassNameProp(props.className),
  })

  return (
    <tr {...nativeProps} {...pandoProps} ref={ref}>
      {children}
    </tr>
  )
}

// <TD />

type TableBodyCellProps = HTMLAttributes<HTMLTableCellElement>

function TableBodyCellEl(
  props: TableBodyCellProps,
  ref: ForwardedRef<HTMLTableCellElement>
) {
  const { children, ...nativeProps } = props
  const pandoProps = getTableBodyCellProps({
    classNames: splitClassNameProp(props.className),
  })
  return (
    <td {...nativeProps} {...pandoProps} ref={ref}>
      {children}
    </td>
  )
}

// exports

export const Table = forwardRef<HTMLTableElement, TableProps>(TableEl)
export const Caption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  TableCaptionEl
)
export const THead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  TableHeadEl
)
export const TH = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  TableHeadCellEl
)
export const TBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  TableBodyEl
)
export const TR = forwardRef<HTMLTableRowElement, TableRowProps>(TableRowEl)
export const TD = forwardRef<HTMLTableCellElement, TableBodyCellProps>(
  TableBodyCellEl
)
