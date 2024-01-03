import { screen, render } from 'test-utils'
import InputPage from 'sandbox/app/react/input/page'

describe('Input Page', () => {
  test('renders the inputs', () => {
    render(<InputPage />)
    expect(screen.getAllByRole('textbox')).toHaveLength(18)
  })

  test('renders the input icons', () => {
    render(<InputPage />)
    expect(
      screen.getAllByRole('img', {
        hidden: true,
      }),
    ).toHaveLength(8)
  })
})
