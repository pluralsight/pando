import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Radio, FormControlProvider } from '@pluralsight/react'

describe('Radio', () => {
  it('renders', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Radio id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Radio id="test" name="test">
          Test
        </Radio>
      </FormControlProvider>,
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it('renders with ref', () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <FormControlProvider readOnly={true}>
        <Radio id="test" name="test" ref={ref} />
      </FormControlProvider>,
    )
    expect(ref.current).toBeInTheDocument()
  })

  it('renders with checked', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Radio id="test" name="test" checked />
      </FormControlProvider>,
    )
    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('renders with disabled', () => {
    render(
      <FormControlProvider disabled={true} readOnly={true}>
        <Radio id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('renders with invalid', () => {
    render(
      <FormControlProvider invalid={true} readOnly={true}>
        <Radio id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid')
    expect(screen.getByRole('radio')).toBeInvalid()
  })

  it('renders with required', () => {
    render(
      <FormControlProvider required={true}>
        <Radio name="required-test" value="required-test">
          Test label
        </Radio>
      </FormControlProvider>,
    )
    expect(screen.getByRole('radio')).toBeRequired()
  })

  it('renders with readOnly', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Radio id="test" name="readonly-test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('radio')).toHaveAttribute('readonly')
  })
})
