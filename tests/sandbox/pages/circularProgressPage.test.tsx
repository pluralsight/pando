import { screen, render } from 'test-utils'
import CircularProgressPage from 'sandbox/app/react/circular-progress/page'

describe('Circular Progress Page', () => {
  test('renders the circular progress bars', () => {
    render(<CircularProgressPage />)
    expect(screen.getAllByRole('progressbar')).toHaveLength(2)
    expect(screen.getAllByRole('status')).toHaveLength(2)
  })
})
