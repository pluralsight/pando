import { screen, render } from 'test-utils'
import Nav from 'sandbox/app/components/Nav'

describe('Nav', () => {
  test('renders', () => {
    render(<Nav />)

    expect(screen.getByText('react')).toBeInTheDocument()
  })
  test('contains Button component link', () => {
    render(<Nav />)

    expect(screen.getByRole('link', { name: 'Button' })).toBeInTheDocument()
  })
})
