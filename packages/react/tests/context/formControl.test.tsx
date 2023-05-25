import { type HTMLAttributes } from 'react'
import { render, screen } from 'test-utils'
import { FormControlProvider, useFormControl } from '@react'

describe('FormControlContext', () => {
  const testId = 'form-control-provider'

  it('throws an error when used outside of a FormControlProvider', () => {
    function TestComponent() {
      useFormControl()
      return null
    }

    expect(() => render(<TestComponent />)).toThrow(
      'useFormControl must be used within a FormControlProvider'
    )
  })

  it('returns the value from the context', () => {
    function TestComponent(props: HTMLAttributes<HTMLDivElement>) {
      const context = useFormControl()
      return <div {...props}>{JSON.stringify(context)}</div>
    }

    render(
      <FormControlProvider disabled invalid readOnly required>
        <TestComponent data-testid={testId} />
      </FormControlProvider>
    )

    expect(screen.getByTestId(testId)).toHaveTextContent(
      JSON.stringify({
        disabled: true,
        invalid: true,
        readOnly: true,
        required: true,
      })
    )
  })

  it('returns the value from the context when updated', () => {
    function TestComponent(props: HTMLAttributes<HTMLDivElement>) {
      const context = useFormControl()
      return <div {...props}>{JSON.stringify(context)}</div>
    }

    const { rerender } = render(
      <FormControlProvider disabled invalid readOnly required>
        <TestComponent data-testid={testId} />
      </FormControlProvider>
    )

    expect(screen.getByTestId(testId)).toHaveTextContent(
      JSON.stringify({
        disabled: true,
        invalid: true,
        readOnly: true,
        required: true,
      })
    )

    rerender(
      <FormControlProvider disabled={false} invalid readOnly required>
        <TestComponent data-testid={testId} />
      </FormControlProvider>
    )

    expect(screen.getByTestId(testId)).toHaveTextContent(
      JSON.stringify({
        disabled: false,
        invalid: true,
        readOnly: true,
        required: true,
      })
    )
  })
})
