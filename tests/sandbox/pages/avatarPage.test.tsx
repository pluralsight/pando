import { screen, render } from 'test-utils'
import AvatarPage from 'sandbox/app/react/avatar/page'

describe('Avatar Page', () => {
  test('renders the avatars', () => {
    render(<AvatarPage />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
