import { screen, render } from 'test-utils'
import Layout from 'sandbox/app/layout'

const component = <Layout>MEOW</Layout>

describe('layout', () => {
  test('renders', () => {
    render(component)
    expect(screen.getByTestId('layout')).toBeInTheDocument()
  })
})
