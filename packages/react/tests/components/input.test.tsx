import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { PlaceholderIcon } from '@pluralsight/icons'
import { Input, FormControlProvider } from '@react'

describe('Input', () => {
  it('renders', () => {
    render(<Input id="test" name="test" />, {
      wrapper: FormControlProvider,
    })
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with start icon', () => {
    render(<Input id="test" name="test" startIcon={PlaceholderIcon} />, {
      wrapper: FormControlProvider,
    })
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('allows a custom class name', () => {
    render(<Input id="test" name="test" className="custom-class-name" />, {
      wrapper: FormControlProvider,
    })
    expect(screen.getByRole('textbox')).toHaveClass('custom-class-name')
  })

  it('passes a ref', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input id="test" name="test" ref={ref} />, {
      wrapper: FormControlProvider,
    })
    expect(ref.current).not.toBeNull()
  })

  it('shows a WarningTriangleFilledIcon when invalid', () => {
    render(
      <FormControlProvider invalid={true}>
        <Input id="test" name="test" />
      </FormControlProvider>
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      })
    ).toBeInTheDocument()
  })
})
