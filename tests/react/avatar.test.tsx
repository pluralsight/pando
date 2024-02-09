import { render, screen, waitForElementToBeRemoved } from 'test-utils'
import { Avatar } from '@pluralsight/react'

describe('Avatar', () => {
  const src =
    'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=30&h=30&q=80'

  function waitForImgToLoad() {
    return waitForElementToBeRemoved(screen.queryByRole('img'))
  }

  test('should render a avatar image', async () => {
    render(<Avatar label="image avatar" src={src} />)
    await screen.findByRole('img')
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('should render a avatar with initials if the img fails to load', async () => {
    render(<Avatar label="albert goonie" src="broken" />)
    await waitForImgToLoad()
    await screen.findByText(/ag/i)
    expect(screen.getByText(/ag/i)).toBeInTheDocument()
  })

  test('should render a avatar with a PersonIcon if no src or name is provided', async () => {
    render(<Avatar src="" label="" />)
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
  })
})
