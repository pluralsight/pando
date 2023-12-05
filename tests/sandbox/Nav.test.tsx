import { screen, render } from 'test-utils'
import Nav from 'sandbox/app/components/Nav'

describe('Nav', () => {
  test('renders', () => {
    render(<Nav />)

    expect(screen.getByText('react')).toBeInTheDocument()
  })
  test('contains intended link', () => {
    render(<Nav />)
    const buttonLink = screen.getByRole('link', { name: 'Button' })

    expect(buttonLink).toHaveAttribute('href', '/react/button')
  })
})
