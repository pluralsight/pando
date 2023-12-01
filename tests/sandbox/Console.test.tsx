import { screen, render } from 'test-utils'
import Console from 'sandbox/app/components/Console'

describe('Console', () => {
  test('renders', () => {
    render(<Console />)
    expect(screen.getByTestId('console')).toBeInTheDocument()
  })
  test('contains intended string', () => {
    render(<Console />)
    expect(screen.getByText('console stuff')).toBeInTheDocument()
  })
})
