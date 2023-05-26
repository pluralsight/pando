import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { FieldMessage } from '@react'

describe('FieldMessage', () => {
  it('renders', () => {
    render(<FieldMessage id="test">test message</FieldMessage>)
    expect(screen.getByText(/test message/i)).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(
      <FieldMessage ref={ref} id="test">
        test message
      </FieldMessage>
    )
    expect(ref.current).not.toBeNull()
  })

  it('applies className', () => {
    render(
      <FieldMessage className="test-class" id="test">
        test message
      </FieldMessage>
    )
    expect(screen.getByText(/test message/i)).toHaveClass('test-class')
  })

  it('applies native attributes', () => {
    const mockFn = jest.fn()
    render(
      <FieldMessage id="test" data-testid="testId" onClick={mockFn}>
        test message
      </FieldMessage>
    )
    expect(screen.getByTestId(/testId/i)).toBeInTheDocument()
    screen.getByText(/test message/i).click()
    expect(mockFn).toHaveBeenCalled()
  })
})
