import { screen, render } from 'test-utils'
import RadioPage from 'sandbox/app/react/radio/page'

describe('Radio Page', () => {
  test('renders the inputs', () => {
    render(<RadioPage />)
    expect(screen.getAllByRole('radio')).toHaveLength(8)
  })
})
