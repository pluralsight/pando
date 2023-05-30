import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Label, FormControlProvider } from '@react'

describe('Label', () => {
  it('renders', () => {
    render(<Label htmlFor="hello">hello</Label>, {
      wrapper: FormControlProvider,
    })
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = createRef<HTMLLabelElement>()
    render(
      <Label ref={ref} htmlFor="hello">
        hello
      </Label>,
      {
        wrapper: FormControlProvider,
      }
    )
    expect(ref.current).not.toBeNull()
  })

  it('displays a required indicator', () => {
    render(
      <FormControlProvider required>
        <Label htmlFor="hello">hello</Label>
      </FormControlProvider>
    )
    expect(screen.getByText('hello (required)')).toBeInTheDocument()
  })

  it('allows customizing the className', () => {
    render(
      <Label className="custom-class" htmlFor="hello">
        hello
      </Label>,
      {
        wrapper: FormControlProvider,
      }
    )
    expect(screen.getByText('hello')).toHaveClass('custom-class')
  })

  it('allows customizing the kind', () => {
    render(
      <Label kind="hidden" htmlFor="hello">
        hello
      </Label>,
      {
        wrapper: FormControlProvider,
      }
    )
    // we want this to be visible so that screen readers can still read it
    expect(screen.getByText('hello')).toBeVisible()
    expect(screen.getByText('hello')).toHaveClass('pando_hiddenFormLabel')
  })

  it('throws when used outside of a FormControlProvider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => null)
    expect(() => render(<Label htmlFor="hello">hello</Label>)).toThrow(
      'useFormControl must be used within a FormControlProvider'
    )
    spy.mockRestore()
  })
})
