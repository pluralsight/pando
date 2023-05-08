/* eslint-disable jest/valid-expect-in-promise */

// For some reason, the waitForElementToBeRemoved only works with the old
// .then() syntax and not async/await. This is the only reason we are disabling
// the eslint rule here.

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Avatar } from '@react'

describe('Avatar', () => {
  const src =
    'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=30&h=30&q=80'

  function waitForImgToLoad() {
    return waitForElementToBeRemoved(
      screen.queryByRole('img', {
        hidden: true,
      })
    )
  }

  test('should render the fallback state while loading', async () => {
    render(<Avatar name="albert" src={src} />)
    waitForImgToLoad().then(async () => {
      await screen.findByText(/a/i)
      expect(screen.getByText(/a/i)).toBeInTheDocument()
    })
  })

  test('should render a avatar image', async () => {
    render(<Avatar name="image avatar" src={src} />)
    waitForImgToLoad().then(async () => {
      await screen.findByRole('img')
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
  })

  test('should render a avatar with initials if the img fails to load', async () => {
    render(<Avatar name="albert goonie" src="https://failure.jfkdlajfdlka" />)
    waitForImgToLoad().then(async () => {
      await screen.findByText(/ag/i)
      expect(screen.getByText(/ag/i)).toBeInTheDocument()
    })
  })

  test('should render a avatar with a PersonIcon if no src or name is provided', async () => {
    render(<Avatar />)
    waitForImgToLoad().then(async () => {
      await screen.findByRole('img')
      expect(
        screen.getByRole('img', {
          hidden: true,
        })
      ).toBeInTheDocument()
    })
  })
})
