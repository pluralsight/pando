import { createRef } from 'react'
import { screen, render, userEvent } from 'test-utils'
import { MenuButton, MenuProvider } from '@react'

describe('MenuButton', () => {
  it('forwards ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <MenuProvider>
        <MenuButton ref={ref} />
      </MenuProvider>
    )
    expect(ref.current).not.toBeNull()
  })

  it('renders with children', () => {
    render(
      <MenuProvider>
        <MenuButton>hello there</MenuButton>
      </MenuProvider>
    )
    expect(screen.getByText('hello there')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        hidden: true,
      })
    ).toBeInTheDocument()
  })

  it('renders with endIcon', () => {
    render(
      <MenuProvider>
        <MenuButton>Test</MenuButton>
      </MenuProvider>
    )
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
  })

  it('throws when not rendered within MenuProvider', () => {
    expect(() => render(<MenuButton />)).toThrow(
      'useMenu must be used within a MenuProvider'
    )
  })

  it('calls a custom onClick handler', async () => {
    const onClick = jest.fn()
    render(
      <MenuProvider>
        <MenuButton onClick={onClick}>Menu</MenuButton>
      </MenuProvider>
    )
    await userEvent.click(screen.getByText('Menu'))
    expect(onClick).toHaveBeenCalled()
  })
})
