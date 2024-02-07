import { screen, render } from 'test-utils'
import AdmonitionPage from 'sandbox/app/react/admonition/page'

describe('Admonition Page', () => {
  test('renders the admonitions', () => {
    render(<AdmonitionPage />)
    expect(screen.getAllByText(/info heading/i)).toHaveLength(2)
    expect(screen.getAllByText(/success heading/i)).toHaveLength(2)
    expect(screen.getAllByText(/warning heading/i)).toHaveLength(2)
    expect(screen.getAllByText(/danger heading/i)).toHaveLength(3)
  })
})
