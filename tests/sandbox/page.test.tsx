import { screen, render } from 'test-utils'
import Home from 'sandbox/app/page'

describe('sandbox', () => {
  test('renders', () => {
    render(<Home />)

    expect(
      screen.getByText(
        'One day we can add keyboard shortcuts here like VS Code.',
      ),
    ).toBeInTheDocument()
  })
})
