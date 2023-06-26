import { createRef } from 'react'
import { screen, render } from 'test-utils'
import { MenuButton } from '@react'

describe('MenuButton', () => {
  it('forwards ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<MenuButton ref={ref} />)
    expect(ref.current).not.toBeNull()
  })

  it('renders with children', () => {
    render(<MenuButton>hello there</MenuButton>)
    expect(screen.getByText('hello there')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      })
    ).toBeInTheDocument()
  })
})
