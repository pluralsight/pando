import { screen, render } from 'test-utils'
import FieldMessagePage from 'sandbox/app/react/field-message/page'

describe('FieldMessage Page', () => {
  test('renders the field messages', () => {
    render(<FieldMessagePage />)
    expect(
      screen.getAllByText(/The name associated with your account./i),
    ).toHaveLength(3)
    expect(screen.getAllByText(/A full name is required./i)).toHaveLength(3)
  })
})
