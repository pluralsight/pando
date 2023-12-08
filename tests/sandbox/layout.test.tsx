import { screen, render } from 'test-utils'
import Layout from 'sandbox/app/layout'
import windowMatchMediaMock from './mock-helpers/windowMatchMedia.mock.ts'

windowMatchMediaMock()

describe('sandbox layout', () => {
  test('renders', () => {
    render(<Layout>Welcome to Pando Sandbox!</Layout>)
    expect(screen.getByText(/Welcome to Pando Sandbox!/i)).toBeInTheDocument()
  })
})
