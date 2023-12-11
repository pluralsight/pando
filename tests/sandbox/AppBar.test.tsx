import { screen, render, userEvent } from 'test-utils'
import AppBar from 'sandbox/app/components/AppBar'
import windowMatchMediaMock from './mock-helpers/windowMatchMedia.mock.ts'

windowMatchMediaMock()

describe('AppBar', () => {
  test('renders', () => {
    render(<AppBar />)
    expect(screen.getByText('Pando Dev Sandbox')).toBeInTheDocument()
  })

  test('contains home link', () => {
    render(<AppBar />)
    expect(
      screen.getByRole('link', { name: /Pando Dev Sandbox/i }),
    ).toBeInTheDocument()
  })

  test('contains docs link', () => {
    render(<AppBar />)
    expect(screen.getByRole('link', { name: /docs/i })).toBeInTheDocument()
  })

  test('contains mode button', async () => {
    render(<AppBar />)
    expect(
      screen.getByRole('button', {
        name: /switch to light mode/i,
      }),
    ).toBeInTheDocument()

    await userEvent.click(
      screen.getByRole('button', {
        name: /switch to light mode/i,
      }),
    )
    expect(
      screen.getByRole('button', {
        name: /switch to dark mode/i,
      }),
    ).toBeInTheDocument()
  })

  test('contains github Link', () => {
    render(<AppBar />)
    expect(screen.getByRole('link', { name: /gh/i })).toBeInTheDocument()
  })
})
