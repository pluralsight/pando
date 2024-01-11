import { screen, render } from 'test-utils'
import FieldMessagePage from 'sandbox/app/react/field-message/page'

describe('FieldMessage Page', () => {
  test('renders the field messages', () => {
    render(<FieldMessagePage />)
    expect(
      screen.getByText(/The name associated with your account./i),
    ).toBeInTheDocument()
    expect(screen.getByText(/A full name is required./i)).toBeInTheDocument()
  })
})
