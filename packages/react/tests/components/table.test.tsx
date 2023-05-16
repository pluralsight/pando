import { render, screen } from 'test-utils'
import { Table, Caption, THead, TH, TBody, TR, TD } from '@react'

describe('Table', () => {
  test('renders a table', () => {
    render(<Table />)
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  test('renders a caption', () => {
    render(<Caption>This is a caption.</Caption>)
    expect(screen.getByText(/this is a caption/i)).toBeInTheDocument()
  })

  test('renders a thead', () => {
    render(<THead />)
    expect(screen.getByRole('rowgroup')).toBeInTheDocument()
  })

  test('renders a th', () => {
    render(<TH />)
    expect(screen.getByRole('columnheader')).toBeInTheDocument()
  })

  test('renders a tbody', () => {
    render(<TBody />)
    expect(screen.getByRole('rowgroup')).toBeInTheDocument()
  })

  test('renders a tr', () => {
    render(<TR />)
    expect(screen.getByRole('row')).toBeInTheDocument()
  })

  test('renders a td', () => {
    render(<TD />)
    expect(screen.getByRole('cell')).toBeInTheDocument()
  })

  test('renders a table with caption, thead, tbody, and tr', () => {
    render(
      <Table>
        <Caption>This is a caption.</Caption>
        <THead>
          <TR>
            <TH>Header</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Cell</TD>
          </TR>
        </TBody>
      </Table>
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByRole('columnheader')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(2)
    expect(screen.getByText(/this is a caption/i)).toBeInTheDocument()
  })

  test('renders a table with caption, thead, tbody, and tr with custom props', () => {
    const mockFn = jest.fn()

    render(
      <Table id="tableId">
        <Caption data-testid="caption">This is a caption.</Caption>
        <THead data-testid="thead">
          <TR data-testid="tr">
            <TH onClick={mockFn}>Header</TH>
          </TR>
        </THead>
        <TBody data-testid="tbody" className="custom-class">
          <TR data-testid="body-tr">
            <TD data-testid="td">Cell</TD>
          </TR>
        </TBody>
      </Table>
    )
    expect(screen.getByRole('table')).toHaveAttribute('id', 'tableId')
    expect(screen.getByText(/this is a caption/i)).toBeInTheDocument()
    expect(screen.getByTestId('caption')).toBeInTheDocument()
    expect(screen.getByTestId('thead')).toBeInTheDocument()
    expect(screen.getByTestId('tr')).toBeInTheDocument()
    expect(screen.getByTestId('body-tr')).toBeInTheDocument()
    expect(screen.getByTestId('tbody')).toHaveClass('custom-class')
    expect(screen.getByTestId('td')).toBeInTheDocument()

    screen.getByRole('columnheader').click()
    expect(mockFn).toHaveBeenCalled()
  })
})
