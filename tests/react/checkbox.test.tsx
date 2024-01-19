import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Checkbox, FormControlProvider } from '@pluralsight/react'

describe('Checkbox', () => {
  it('renders', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Checkbox id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Checkbox id="test" name="test">
          Test
        </Checkbox>
      </FormControlProvider>,
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it('renders with ref', () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <FormControlProvider readOnly={true}>
        <Checkbox id="test" name="test" ref={ref} />
      </FormControlProvider>,
    )
    expect(ref.current).toBeInTheDocument()
  })

  it('renders with indeterminate', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Checkbox checked id="test" name="test" indeterminate />
      </FormControlProvider>,
    )
    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
  })

  it('renders with checked', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Checkbox id="test" name="test" checked />
      </FormControlProvider>,
    )
    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
  })

  it('renders with disabled', () => {
    render(
      <FormControlProvider disabled={true} readOnly={true}>
        <Checkbox id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('renders with invalid', () => {
    render(
      <FormControlProvider invalid={true} readOnly={true}>
        <Checkbox id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid')
    expect(screen.getByRole('checkbox')).toBeInvalid()
  })

  it('renders with required', () => {
    render(
      <FormControlProvider required={true} readOnly={true}>
        <Checkbox id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('checkbox')).toBeRequired()
  })

  it('renders with readOnly', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Checkbox id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute('readonly')
  })
})
