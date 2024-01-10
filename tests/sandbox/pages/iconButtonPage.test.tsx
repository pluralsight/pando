import { screen, render } from 'test-utils'
import IconButtonPage from 'sandbox/app/react/button/page'

describe('Icon Button Page', () => {
  test('renders the buttons', () => {
    render(<IconButtonPage />)
    expect(screen.getAllByRole('button')).toHaveLength(37)
  })

  test('renders the button icons', () => {
    render(<IconButtonPage />)
    expect(
      screen.getAllByRole('img', {
        hidden: true,
      }),
    ).toHaveLength(4)
  })
})
