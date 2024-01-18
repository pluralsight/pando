import { screen, render } from 'test-utils'
import TextareaPage from 'sandbox/app/react/textarea/page'

describe('Textarea Page', () => {
  test('renders the textarea', () => {
    render(<TextareaPage />)
    expect(screen.getAllByRole('textbox')).toHaveLength(17)
  })
})
