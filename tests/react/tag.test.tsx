import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Tag } from '@pluralsight/react'

describe('Tag', () => {
  test('renders', () => {
    render(<Tag>hello</Tag>)
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })

  test('forwards ref', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(<Tag ref={ref}>hello</Tag>)
    expect(ref.current).not.toBeNull()
  })

  test('accepts custom props', () => {
    render(
      <Tag data-testid="custom-prop" className="test-class" href="/">
        hello
      </Tag>,
    )
    expect(screen.getByTestId('custom-prop')).toBeInTheDocument()
    expect(screen.getByText(/hello/i)).toHaveClass('test-class')
    expect(screen.getByText(/hello/i)).toHaveAttribute('href', '/')
  })
})
