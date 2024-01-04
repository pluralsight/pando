import { screen, render } from 'test-utils'
import LabelPage from 'sandbox/app/react/label/page'

describe('Label Page', () => {
  test('renders the labels', () => {
    render(<LabelPage />)
    expect(screen.getAllByLabelText(/name/i)).toHaveLength(2)
  })
})
