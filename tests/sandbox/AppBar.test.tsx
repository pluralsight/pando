import { screen, render } from 'test-utils'
import AppBar from 'sandbox/app/components/AppBar'

describe('AppBar', () => {
  test('renders', () => {
    render(<AppBar />)

    expect(screen.getByText('Pando Dev Sandbox')).toBeInTheDocument()
  })

  test('contains home link', () => {
    render(<AppBar />)
    const homeLink = screen.getAllByRole('link')[0]

    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveTextContent('Pando Dev Sandbox')
  })

  test('contains docs link', () => {
    render(<AppBar />)
    const docsLink = screen.getAllByRole('link')[1]

    expect(docsLink).toHaveAttribute('href', 'https://design.pluralsight.com/')
    expect(docsLink).toHaveTextContent('Docs')
  })

  test('contains theme button', () => {
    render(<AppBar />)
    const themeButton = screen.getByRole('button')

    expect(themeButton).toHaveTextContent('theme')
  })

  test('contains github Link', () => {
    render(<AppBar />)
    const githubLink = screen.getAllByRole('link')[2]

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/pluralsight/pando',
    )
    expect(githubLink).toHaveTextContent('GH')
  })
})
