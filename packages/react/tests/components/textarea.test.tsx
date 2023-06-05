import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Textarea, FormControlProvider } from '@react'

describe('Textarea', () => {
  it('renders', () => {
    render(
      <FormControlProvider>
        <Textarea />
      </FormControlProvider>
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(
      <FormControlProvider>
        <Textarea placeholder="placeholder" />
      </FormControlProvider>
    )
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
  })

  it('allows custom classes', () => {
    render(
      <FormControlProvider>
        <Textarea className="custom-class" />
      </FormControlProvider>
    )
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  it('passes the ref', () => {
    const ref = createRef<HTMLTextAreaElement>()
    render(
      <FormControlProvider>
        <Textarea ref={ref} />
      </FormControlProvider>
    )
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('renders with resize', () => {
    render(
      <FormControlProvider>
        <Textarea resize="none" />
      </FormControlProvider>
    )
    expect(screen.getByRole('textbox')).toHaveClass('pando_noneTextarea')
  })

  it('renders with invalid', () => {
    render(
      <FormControlProvider invalid={true}>
        <Textarea />
      </FormControlProvider>
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('data-invalid', 'true')
  })
})
