import { jest } from '@jest/globals'
import { render, screen } from 'test-utils'
import { Badge } from '@pluralsight/react'
import { PlaceholderIcon } from '@pluralsight/react/icons'

describe('Badge', () => {
  it('renders child content', () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText(/badge/i)).toBeInTheDocument()
  })

  it('renders an icon', () => {
    render(<Badge startIcon={<PlaceholderIcon />}>Badge1</Badge>)
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/badge1/i)).toBeInTheDocument()
  })

  it('allows native attributes', () => {
    const mockFn = jest.fn()
    render(
      <Badge data-testid="test" onClick={mockFn}>
        Test
      </Badge>,
    )

    expect(screen.getByTestId('test')).toBeInTheDocument()

    screen.getByText(/test/i).click()
    expect(mockFn).toHaveBeenCalled()
  })
})
