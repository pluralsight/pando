import { render, screen, userEvent } from 'test-utils'
import { MenuButton, MenuList, MenuProvider } from '@react'

describe('MenuList', () => {
  function Test() {
    return (
      <MenuProvider>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <li>Item 1</li>
          <li>Item 2</li>
        </MenuList>
      </MenuProvider>
    )
  }

  it('initially renders a hidden list', () => {
    render(<Test />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('renders a visible list when expanded', async () => {
    render(<Test />)
    await userEvent.click(screen.getByText('Menu'))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('adds custom classnames', async () => {
    render(
      <MenuProvider>
        <MenuButton>Menu</MenuButton>
        <MenuList className="custom-classname">
          <li>Item 1</li>
          <li>Item 2</li>
        </MenuList>
      </MenuProvider>
    )
    await userEvent.click(screen.getByText('Menu'))
    expect(screen.getByRole('menu')).toHaveClass('custom-classname')
  })
})
