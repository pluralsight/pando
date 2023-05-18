import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Icon } from '@react'
import { PlaceholderIcon } from '@pluralsight/icons'

describe('Icon', () => {
  it('renders', () => {
    render(<Icon ariaHidden={false} ariaLabel="test" icon={PlaceholderIcon} />)
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
  })

  it('renders with custom size', () => {
    render(
      <Icon
        ariaHidden={false}
        ariaLabel="test"
        customSize="100%"
        icon={PlaceholderIcon}
      />
    )
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/test/i)).toHaveAttribute('width', '100%')
    expect(screen.getByLabelText(/test/i)).toHaveAttribute('height', '100%')
  })

  it('renders with size', () => {
    render(
      <Icon
        ariaHidden={false}
        ariaLabel="test"
        size="s"
        icon={PlaceholderIcon}
      />
    )
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/test/i)).toHaveClass('pando_sIconSize')
  })

  it('renders with custom class', () => {
    render(
      <Icon
        ariaHidden={false}
        ariaLabel="test"
        className="custom-class"
        icon={PlaceholderIcon}
      />
    )
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/test/i)).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLSpanElement>()
    render(
      <Icon
        ariaHidden={false}
        ariaLabel="test"
        icon={PlaceholderIcon}
        ref={ref}
      />
    )
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
    expect(ref.current).not.toBeNull()
  })
})
