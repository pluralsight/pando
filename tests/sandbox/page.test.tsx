import { screen, render } from 'test-utils'
import Home from 'sandbox/app/page'
import { jest } from '@jest/globals'

const mockModule = await import('@/styled-system/patterns/index.mjs')

jest.unstable_mockModule('@/styled-system/patterns', () => mockModule)

describe('sandbox', () => {
  test('sandbox', () => {
    render(<Home />)
    expect(
      screen.getByText(
        'One day we can add keyboard shortcuts here like VS Code.',
      ),
    ).toBeInTheDocument()
  })
})
