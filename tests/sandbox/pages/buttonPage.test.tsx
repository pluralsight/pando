import { screen, render } from 'test-utils'
import ButtonPage from 'sandbox/app/react/button/page'

describe('Button Page', () => {
  it('renders the buttons', () => {
    render(<ButtonPage />)
    expect(screen.getAllByRole('button')).toHaveLength(37)
  })

  it('renders the button icons', () => {
    render(<ButtonPage />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
