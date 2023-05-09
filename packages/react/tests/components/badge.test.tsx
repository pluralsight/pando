import { render, screen } from 'test-utils'
import { Badge } from '@react'

describe('Badge', () => {
  it('renders child content', () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText(/badge/i)).toBeInTheDocument()
  })

  it('allows native attributes', () => {
    const mockFn = jest.fn()
    render(
      <Badge data-testid="test" onClick={mockFn}>
        Test
      </Badge>
    )

    expect(screen.getByTestId('test')).toBeInTheDocument()

    screen.getByText(/test/i).click()
    expect(mockFn).toHaveBeenCalled()
  })
})
