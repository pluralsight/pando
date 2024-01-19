import { screen, render } from 'test-utils'
import CheckboxPage from 'sandbox/app/react/checkbox/page'

describe('Checkbox Page', () => {
  test('renders the inputs', () => {
    render(<CheckboxPage />)
    expect(screen.getAllByRole('checkbox')).toHaveLength(10)
  })
})
