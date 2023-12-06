import { screen, render, userEvent } from 'test-utils'
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

  test('contains mode button', async () => {
    render(<AppBar />)
    expect(screen.getByRole('button', { name: '🌞' })).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'mode' }))
    expect(screen.getByRole('button', { name: '🌚' })).toBeInTheDocument()
  })

  test('contains github Link', () => {
    render(<AppBar />)
    expect(screen.getByRole('link', { name: 'GH' })).toBeInTheDocument()
  })
})
