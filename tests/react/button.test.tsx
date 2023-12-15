import { jest } from '@jest/globals'
import { Button } from '@pluralsight/react'
import { PlaceholderIcon } from '@pluralsight/icons'
import { render, screen, userEvent } from 'test-utils'

describe('Button', () => {
  it('renders the children', () => {
    render(<Button>Default</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders a start icon', () => {
    render(<Button startIcon={<PlaceholderIcon />}>Action</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
  })

  it('renders a end icon', () => {
    render(
      <Button endIcon={<PlaceholderIcon />} sentiment="danger">
        Cancel
      </Button>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
  })

  it('accepts native button props', async () => {
    const mockFn = jest.fn()
    render(
      <Button onClick={mockFn} type="submit">
        Submit
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    await userEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalled()
  })
})
