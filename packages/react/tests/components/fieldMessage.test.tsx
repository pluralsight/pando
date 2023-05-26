import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { FieldMessage, FormControlProvider } from '@react'

describe('FieldMessage', () => {
  it('renders', () => {
    render(<FieldMessage id="test">test message</FieldMessage>, {
      wrapper: FormControlProvider,
    })
    expect(screen.getByText(/test message/i)).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(
      <FieldMessage ref={ref} id="test">
        test message
      </FieldMessage>,
      {
        wrapper: FormControlProvider,
      }
    )
    expect(ref.current).not.toBeNull()
  })

  it('applies className', () => {
    render(
      <FieldMessage className="test-class" id="test">
        test message
      </FieldMessage>,
      {
        wrapper: FormControlProvider,
      }
    )
    expect(screen.getByText(/test message/i)).toHaveClass('test-class')
  })

  it('applies native attributes', () => {
    const mockFn = jest.fn()
    render(
      <FieldMessage id="test" data-testid="testId" onClick={mockFn}>
        test message
      </FieldMessage>,
      {
        wrapper: FormControlProvider,
      }
    )
    expect(screen.getByTestId(/testId/i)).toBeInTheDocument()
    screen.getByText(/test message/i).click()
    expect(mockFn).toHaveBeenCalled()
  })

  it("doesn't render when invalid", () => {
    render(
      <FormControlProvider invalid={true}>
        <FieldMessage id="test">test message</FieldMessage>
      </FormControlProvider>
    )
    expect(screen.queryByText(/test message/i)).not.toBeInTheDocument()
  })
})
