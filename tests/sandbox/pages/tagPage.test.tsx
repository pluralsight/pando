import { screen, render } from 'test-utils'
import TagPage from 'sandbox/app/react/tag/page'

describe('Tag Page', () => {
  test('renders the tags', () => {
    render(<TagPage />)
    expect(screen.getAllByRole('link')).toHaveLength(5)
  })
})
