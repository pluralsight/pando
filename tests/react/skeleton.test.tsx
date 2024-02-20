import { jest } from '@jest/globals'
import { render, screen } from 'test-utils'
import { Skeleton } from '@pluralsight/react'

describe('Skeleton', () => {
  const testID = 'skeleton'

  test('renders successfully', () => {
    render(<Skeleton data-testid={testID} />)
    expect(screen.getByTestId(/skeleton/i)).toBeInTheDocument()
  })

  test('allows overriding the className', () => {
    render(<Skeleton data-testid={testID} className="test-class" />)
    expect(screen.getByTestId(/skeleton/i)).toHaveClass('test-class')
  })

  test('allows native div props', () => {
    const mockFn = jest.fn()
    render(<Skeleton data-testid={testID} id="test-id" onClick={mockFn} />)
    expect(screen.getByTestId(/skeleton/i)).toHaveAttribute('id', 'test-id')
    screen.getByTestId(/skeleton/i).click()
    expect(mockFn).toHaveBeenCalled()
  })

  test('shows aria-busy when loading', () => {
    render(<Skeleton data-testid={testID} />)
    expect(screen.getByTestId(/skeleton/i)).toHaveAttribute('aria-busy', 'true')
  })
})
