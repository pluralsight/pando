import { render, screen } from 'test-utils'
import { Button } from '@react'
import { PlaceholderIcon } from '@pluralsight/icons'

describe('Button', () => {
  it('renders the children', () => {
    render(<Button>Default</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders a start icon', () => {
    render(<Button startIcon={PlaceholderIcon}>Action</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      })
    ).toBeInTheDocument()
  })

  it('renders a end icon', () => {
    render(
      <Button endIcon={PlaceholderIcon} sentiment="danger">
        Cancel
      </Button>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      })
    ).toBeInTheDocument()
  })

  it('accepts native button props', () => {
    const mockFn = jest.fn()
    render(
      <Button onClick={mockFn} type="submit">
        Submit
      </Button>
    )
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    screen.getByRole('button').click()
    expect(mockFn).toHaveBeenCalled()
  })
})
