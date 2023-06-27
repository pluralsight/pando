import { MenuProvider, MenuButton, MenuList, Avatar } from '@pluralsight/react'
import { data } from '../data/avatar.data.ts'

export default function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>

      <MenuProvider>
        <MenuButton sentiment="default" usage="text">
          Some D00d
          <Avatar {...data.results.s} />
        </MenuButton>
        <MenuList>
          <li>Item 1</li>
          <li>Item 2</li>
        </MenuList>
      </MenuProvider>
    </div>
  )
}
