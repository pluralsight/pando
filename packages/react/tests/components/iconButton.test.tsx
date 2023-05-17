import { render, screen } from 'test-utils'
import { IconButton } from '@react'
import { PlaceholderIcon } from '@pluralsight/icons'

describe('IconButton', () => {
  it('renders', () => {
    render(<IconButton ariaLabel="placeholder" icon={PlaceholderIcon} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders with a label', () => {
    render(<IconButton ariaLabel="placeholder" icon={PlaceholderIcon} />)
    expect(screen.getByLabelText('placeholder')).toBeInTheDocument()
  })

  it('renders an icon', () => {
    render(<IconButton ariaLabel="placeholder" icon={PlaceholderIcon} />)
    expect(
      screen.getByRole('img', {
        hidden: true,
      })
    ).toBeInTheDocument()
  })

  it('renders a disabled button', () => {
    render(
      <IconButton ariaLabel="placeholder" disabled icon={PlaceholderIcon} />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders a button with a custom class name', () => {
    render(
      <IconButton
        ariaLabel="placeholder"
        className="custom-class"
        icon={PlaceholderIcon}
      />
    )
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})
