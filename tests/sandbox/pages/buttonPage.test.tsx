import { screen, render } from 'test-utils'
import ButtonPage from 'sandbox/app/react/button/page'

describe('Button Page', () => {
  test('renders the buttons', () => {
    render(<ButtonPage />)
    expect(screen.getAllByRole('button')).toHaveLength(37)
  })

  test('renders the button icons', () => {
    render(<ButtonPage />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
