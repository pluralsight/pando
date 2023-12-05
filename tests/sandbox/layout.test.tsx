import { screen, render } from 'test-utils'
import Layout from 'sandbox/app/layout'

describe('sandbox layout', () => {
  it('renders', () => {
    render(<Layout>Welcome to Pando Sandbox!</Layout>)

    expect(screen.getByText('Welcome to Pando Sandbox!')).toBeInTheDocument()
  })
})