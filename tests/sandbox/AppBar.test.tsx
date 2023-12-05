import { screen, render } from 'test-utils'
import AppBar from 'sandbox/app/components/AppBar'

describe('AppBar', () => {
  test('renders', () => {
    render(<AppBar />)

    expect(screen.getByText('Pando Dev Sandbox')).toBeInTheDocument()
  })

  test('contains home link', () => {
    render(<AppBar />)
    const homeLink = screen.getByRole('link', { name: 'Pando Dev Sandbox' })

    expect(homeLink).toHaveAttribute('href', '/')
  })

  test('contains docs link', () => {
    render(<AppBar />)
    const docsLink = screen.getByRole('link', { name: 'Docs' })

    expect(docsLink).toHaveAttribute('href', 'https://design.pluralsight.com/')
  })

  test('contains theme button', () => {
    render(<AppBar />)
    const themeButton = screen.getByRole('button', { name: 'theme' })

    expect(themeButton).toBeInTheDocument()
  })

  test('contains github Link', () => {
    render(<AppBar />)
    const githubLink = screen.getByRole('link', { name: 'GH' })

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/pluralsight/pando',
    )
  })
})
