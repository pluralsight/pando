import { render, screen } from '@testing-library/react'
import { Avatar } from '@react'

describe('Avatar', () => {
  const src =
    'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=30&h=30&q=80'

  test('should render the fallback state while loading', () => {
    render(<Avatar name="albert" src={src} />)
    expect(screen.getByText(/a/i)).toBeInTheDocument()
  })

  test('should render a avatar image', async () => {
    render(<Avatar name="image avatar" src={src} />)
    await screen.findByAltText(/image avatar/i)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  test('should render a avatar with initials if the img fails to load', async () => {
    render(
      <Avatar name="albert" src="https://source.unsplash.com/random/?fail" />
    )
    await screen.findByText('A')
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  test('should render a avatar with a PersonIcon if the img fails to load and no name is provided', async () => {
    render(<Avatar src="https://source.unsplash.com/random/?fail" />)
    await screen.findByRole('img')
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Person icon')
  })
})
