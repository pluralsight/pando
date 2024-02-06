import { screen, render } from 'test-utils'
import AdmonitionPage from 'sandbox/app/react/admonition/page'

describe('Admonition Page', () => {
  test('renders the admonitions', () => {
    render(<AdmonitionPage />)
    expect(screen.getByText(/info heading/i)).toBeInTheDocument()
    expect(screen.getByText(/success heading/i)).toBeInTheDocument()
    expect(screen.getByText(/warning heading/i)).toBeInTheDocument()
    expect(screen.getByText(/danger heading/i)).toBeInTheDocument()
  })
})
