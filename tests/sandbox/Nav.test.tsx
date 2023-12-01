import { screen, render } from 'test-utils'
import Nav from 'sandbox/app/components/Nav'

describe('Nav', () => {
  test('renders', () => {
    render(<Nav />)
    expect(screen.getByTestId('nav')).toBeInTheDocument()
  })
  test('contains intended string', () => {
    render(<Nav />)
    expect(screen.getByText('react')).toBeInTheDocument()
  })
  test('contains intended link', () => {
    render(<Nav />)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
