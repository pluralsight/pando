import { createRef } from 'react'
import { screen, render } from 'test-utils'
import { Fieldset, Legend, FormControlProvider } from '@react'

describe('Fieldset', () => {
  it('renders', () => {
    render(
      <FormControlProvider>
        <Fieldset />
      </FormControlProvider>
    )
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLFieldSetElement>()
    render(
      <FormControlProvider>
        <Fieldset ref={ref} />
      </FormControlProvider>
    )
    expect(ref.current).not.toBeNull()
  })

  it('allows custom properties', () => {
    render(
      <FormControlProvider>
        <Fieldset data-testid="my-fieldset" />
      </FormControlProvider>
    )
    expect(screen.getByTestId('my-fieldset')).toBeInTheDocument()
  })
})

describe('Legend', () => {
  it('renders', () => {
    render(
      <FormControlProvider>
        <Legend>Do you agree?</Legend>
      </FormControlProvider>
    )
    expect(screen.getByText(/do you agree\?/i)).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLLegendElement>()
    render(
      <FormControlProvider>
        <Legend ref={ref} />
      </FormControlProvider>
    )
    expect(ref.current).not.toBeNull()
  })

  it('allows custom properties', () => {
    render(
      <FormControlProvider>
        <Legend data-testid="my-legend" />
      </FormControlProvider>
    )
    expect(screen.getByTestId('my-legend')).toBeInTheDocument()
  })
})
