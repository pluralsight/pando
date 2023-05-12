import { render, screen } from 'test-utils'
import { Skeleton } from '@react'

describe('Skeleton', () => {
  const testID = 'skeleton'

  it('renders successfully', () => {
    render(<Skeleton data-testid={testID} />)
    expect(screen.getByTestId(/skeleton/i)).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Skeleton>
        <p>test text.</p>
      </Skeleton>
    )
    expect(screen.getByText(/test text/i)).toBeInTheDocument()
  })

  it('allows overriding the className', () => {
    render(<Skeleton data-testid={testID} className="test-class" />)
    expect(screen.getByTestId(/skeleton/i)).toHaveClass('test-class')
  })

  it('allows native div props', () => {
    const mockFn = jest.fn()
    render(<Skeleton data-testid={testID} id="test-id" onClick={mockFn} />)
    expect(screen.getByTestId(/skeleton/i)).toHaveAttribute('id', 'test-id')
    screen.getByTestId(/skeleton/i).click()
    expect(mockFn).toHaveBeenCalled()
  })
})
