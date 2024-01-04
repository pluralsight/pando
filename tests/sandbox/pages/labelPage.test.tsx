import { screen, render } from 'test-utils'
import LabelPage from 'sandbox/app/react/label/page'

describe('Input Page', () => {
  test('renders the inputs', () => {
    render(<LabelPage />)
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
  })
})
