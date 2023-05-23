import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Grid, GridItem } from '@react'

describe('Grid', () => {
  it('renders', () => {
    render(
      <Grid>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
      </Grid>
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<Grid data-testid="grid" className="custom" />)
    expect(screen.getByTestId(/grid/i)).toHaveClass('custom')
  })

  it('renders with custom styles', () => {
    render(<Grid data-testid="grid" style={{ color: 'red' }} />)
    expect(screen.getByTestId(/grid/i)).toHaveStyle({ color: 'red' })
  })

  it('passes a ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Grid ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})

describe('GridItem', () => {
  it('renders', () => {
    render(<GridItem>1</GridItem>)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<GridItem className="custom">grid-item</GridItem>)
    expect(screen.getByText(/grid-item/i)).toHaveClass('custom')
  })

  it('renders with custom styles', () => {
    render(<GridItem style={{ color: 'red' }}>grid-item</GridItem>)
    expect(screen.getByText(/grid-item/i)).toHaveStyle({ color: 'red' })
  })

  it('passes a ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<GridItem ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})
