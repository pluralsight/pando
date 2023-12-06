import { screen, render } from 'test-utils'
import AppBar from 'sandbox/app/components/AppBar'

describe('AppBar', () => {
  test('renders', () => {
    render(<AppBar />)

    expect(screen.getByText('Pando Dev Sandbox')).toBeInTheDocument()
  })

  test('contains home link', () => {
    render(<AppBar />)

    expect(
      screen.getByRole('link', { name: 'Pando Dev Sandbox' }),
    ).toBeInTheDocument()
  })

  test('contains docs link', () => {
    render(<AppBar />)

    expect(screen.getByRole('link', { name: 'Docs' })).toBeInTheDocument()
  })

  test('contains theme button', () => {
    render(<AppBar />)

    expect(screen.getByRole('button', { name: 'theme' })).toBeInTheDocument()
  })

  test('contains github Link', () => {
    render(<AppBar />)

    expect(screen.getByRole('link', { name: 'GH' })).toBeInTheDocument()
  })
})
