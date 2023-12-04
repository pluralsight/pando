import { screen, render } from 'test-utils'
import AppBar from 'sandbox/app/components/AppBar'

describe('AppBar', () => {
  test('renders', () => {
    render(<AppBar />)
    expect(screen.getByTestId('app-bar')).toBeInTheDocument()
  })
  test('contains intended string', () => {
    render(<AppBar />)
    expect(screen.getByText('Pando Dev Sandbox')).toBeInTheDocument()
  })
  test('left nav contains intended links', () => {
    render(<AppBar />)
    const leftNav = screen.getByTestId('app-bar')
    expect(leftNav).toContainElement(screen.getByText('Docs'))
  })
  test('right nav contains intended links', () => {
    render(<AppBar />)
    const rightNav = screen.getByTestId('app-bar-right-nav')
    expect(rightNav).toContainElement(screen.getByText('theme'))
    expect(rightNav).toContainElement(screen.getByText('GH'))
  })
})
