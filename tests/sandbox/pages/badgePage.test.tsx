import { screen, render } from 'test-utils'
import BadgePage from 'sandbox/app/react/badge/page'

describe('Badge Page', () => {
  test('renders the badges', () => {
    render(<BadgePage />)
    expect(screen.getAllByText(/label/i)).toHaveLength(40)
  })
})
