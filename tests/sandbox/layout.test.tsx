import { screen, render } from 'test-utils'
import Layout from 'sandbox/app/layout'

const component = <Layout>Welcome to the Pando Sandbox!</Layout>

describe('layout', () => {
  test('renders', () => {
    render(component)
    expect(screen.getByTestId('layout')).toBeInTheDocument()
  })
  test('renders children', () => {
    render(component)
    expect(
      screen.getByText('Welcome to the Pando Sandbox!'),
    ).toBeInTheDocument()
  })
  test('includes intended html attributes', () => {
    render(component)
    expect(screen.getByTestId('html')).toHaveAttribute('lang', 'en')
    expect(screen.getByTestId('html')).toHaveAttribute('data-theme', 'inkyBlue')
    expect(screen.getByTestId('html')).toHaveAttribute(
      'data-color-mode',
      'dark',
    )
  })
})
