import { screen, render } from 'test-utils'
import TextLinkPage from 'sandbox/app/react/text-link/page'

describe('TextLink Page', () => {
  test('renders the field messages', () => {
    render(<TextLinkPage />)
    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getAllByRole('img', { hidden: true })).toHaveLength(1)
  })
})
