import { screen, render } from 'test-utils'
import ProgressBarPage from 'sandbox/app/react/progress-bar/page'

describe('ProgressBar Page', () => {
  test('renders the progress bars', () => {
    render(<ProgressBarPage />)
    expect(screen.getAllByRole('progressbar')).toHaveLength(9)
  })
})
