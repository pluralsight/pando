import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { ErrorMessage, FormControlProvider } from '@react'

describe('ErrorMessage', () => {
  it('renders', () => {
    render(
      <FormControlProvider invalid={true}>
        <ErrorMessage id="test">test message</ErrorMessage>
      </FormControlProvider>
    )

    expect(screen.getByText(/test message/i)).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(
      <FormControlProvider invalid={true}>
        <ErrorMessage id="test" ref={ref}>
          test message
        </ErrorMessage>
      </FormControlProvider>
    )
    expect(ref.current).not.toBeNull()
  })

  it('applies className', () => {
    render(
      <FormControlProvider invalid={true}>
        <ErrorMessage id="test" className="test-class">
          test message
        </ErrorMessage>
      </FormControlProvider>
    )
    expect(screen.getByText(/test message/i)).toHaveClass('test-class')
  })

  it('applies native attributes', () => {
    const mockFn = jest.fn()
    render(
      <FormControlProvider invalid={true}>
        <ErrorMessage id="test" data-testid="testId" onClick={mockFn}>
          test message
        </ErrorMessage>
      </FormControlProvider>
    )
    expect(screen.getByTestId(/testId/i)).toBeInTheDocument()
    screen.getByText(/test message/i).click()
    expect(mockFn).toHaveBeenCalled()
  })

  it("only renders when invalid", () => {
    render(<ErrorMessage id="test">test message</ErrorMessage>, {
      wrapper: FormControlProvider,
    })
    expect(screen.queryByText(/test message/i)).not.toBeInTheDocument()
  })
})
