import { render, screen } from 'test-utils'
import { CircularProgress } from '@react'

describe('CircularProgress', () => {
  test('renders a circlar progress', () => {
    render(<CircularProgress ariaLabel="progress-1" />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  test('renders a circlar progress with a value', () => {
    render(<CircularProgress ariaLabel="progress-2" now={50} displayValue />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  test('accepts native div element props', () => {
    const mockFn = jest.fn()
    render(<CircularProgress ariaLabel="progress-3" onClick={mockFn} />)
    screen.getByRole('progressbar').click()
    expect(mockFn).toHaveBeenCalled()
  })
})
