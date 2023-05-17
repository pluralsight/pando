import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { TextLink } from '@react'

describe('TextLink', () => {
  test('renders', () => {
    render(<TextLink>link</TextLink>)
    expect(screen.getByText(/link/i)).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  test('forwards refs', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(<TextLink ref={ref}>link</TextLink>)
    expect(ref.current).not.toBeNull()
  })

  test('allows custom properties', () => {
    render(
      <TextLink data-testid="test" className="custom">
        link
      </TextLink>
    )
    expect(screen.getByTestId('test')).toBeInTheDocument()
    expect(screen.getByText(/link/i)).toHaveClass('custom')
  })

  test('displays an icon when a link is external', () => {
    render(<TextLink href="https://pluralsight.com">link</TextLink>)
    expect(screen.getByText(/link/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      })
    ).toBeInTheDocument()
  })

  test('does not display an icon when a link is internal', () => {
    render(<TextLink href="/">link</TextLink>)
    expect(screen.getByText(/link/i)).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
