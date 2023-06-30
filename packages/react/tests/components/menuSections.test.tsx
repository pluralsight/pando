import { render, screen, userEvent } from 'test-utils'
import {
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuProvider,
} from '@react'
import { PlaceholderIcon } from '@pluralsight/icons'

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

  // Figure out how to work around floating ui context

  it.todo(
    'renders a visible list when expanded'
    // render(<Test />)
    // await userEvent.click(screen.getByText('Menu'))
    // expect(screen.getByRole('menu')).toBeInTheDocument()
  )

  it.todo(
    'adds custom classnames'
    // render(
    //   <MenuProvider>
    //     <MenuButton>Menu</MenuButton>
    //     <MenuList className="custom-classname">
    //       <li>Item 1</li>
    //       <li>Item 2</li>
    //     </MenuList>
    //   </MenuProvider>
    // )
    // await userEvent.click(screen.getByText('Menu'))
    // expect(screen.getByRole('menu')).toHaveClass('custom-classname')
  )
})

describe('MenuItem', () => {
  // function Test() {
  //   return (
  //     <MenuProvider>
  //       <MenuButton>Menu</MenuButton>
  //       <MenuList>
  //         <MenuItem>Item 1</MenuItem>
  //         <MenuItem>Item 2</MenuItem>
  //       </MenuList>
  //     </MenuProvider>
  //   )
  // }

  // Figure out how to work around floating ui context

  it.todo(
    'renders a list item'
    // render(<Test />)
    // await userEvent.click(screen.getByText('Menu'))
    // expect(screen.getAllByRole('menuitem')).toHaveLength(2)
  )

  it.todo(
    'adds custom classnames'
    // render(
    //   <MenuProvider>
    //     <MenuButton>Menu</MenuButton>
    //     <MenuList>
    //       <MenuItem className="custom-classname">Item 1</MenuItem>
    //     </MenuList>
    //   </MenuProvider>
    // )
    // await userEvent.click(screen.getByText('Menu'))
    // expect(screen.getByRole('menuitem')).toHaveClass('custom-classname')
  )

  it.todo(
    'renders an icon'
    // render(
    //   <MenuProvider>
    //     <MenuButton>Menu</MenuButton>
    //     <MenuList>
    //       <MenuItem icon={PlaceholderIcon}>Item 1</MenuItem>
    //       <MenuItem>Item 2</MenuItem>
    //     </MenuList>
    //   </MenuProvider>
    // )
    // await userEvent.click(screen.getByText('Menu'))
    // expect(screen.getByLabelText(/placeholder icon/i)).toBeInTheDocument()
  )
})

describe('MenuDivider', () => {
  // function Test() {
  //   return (
  //     <MenuProvider>
  //       <MenuButton>Menu</MenuButton>
  //       <MenuList>
  //         <MenuItem>Item 1</MenuItem>
  //         <MenuDivider />
  //         <MenuItem>Item 2</MenuItem>
  //       </MenuList>
  //     </MenuProvider>
  //   )
  // }

  it.todo(
    'renders a divider'
    // render(<Test />)
    // await userEvent.click(screen.getByText('Menu'))
    // expect(screen.getByRole('separator')).toBeInTheDocument()
  )
})
