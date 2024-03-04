import { screen, render } from 'test-utils'
import SwitchInputPage from 'sandbox/app/react/switch-input/page'

describe('SwitchInput Page', () => {
  test('renders the labels', () => {
    render(<SwitchInputPage />)
    expect(screen.getAllByRole('checkbox')).toHaveLength(8)
  })
})
