function createTableData(count: number) {
  const arr = Array.from({ length: count })

  return arr.map(() => ({
    col1: 'Hello',
    col2: 'World',
    col3: 'There',
    col4: 'Kewl',
    col5: 'D00d',
  }))
}

// public

export const tableCols = [
  {
    Header: 'Column 1',
    accessor: 'col1',
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
  {
    Header: 'Column 3',
    accessor: 'col3',
  },
  {
    Header: 'Column 4',
    accessor: 'col4',
  },
  {
    Header: 'Column 5',
    accessor: 'col5',
  },
] as const

export const tableData = createTableData(10)
