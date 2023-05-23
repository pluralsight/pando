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
})

describe('GridItem', () => {
  it('renders', () => {
    render(<GridItem>1</GridItem>)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
