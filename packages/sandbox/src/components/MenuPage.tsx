import {
  MenuProvider,
  MenuButton,
  MenuList,
  Avatar,
  MenuItem,
  MenuDivider,
} from '@pluralsight/react'
import { data } from '../data/avatar.data.ts'
import { PlaceholderIcon } from '@pluralsight/icons'

export default function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>

      <MenuProvider>
        <MenuButton>
          Some D00d
          <Avatar {...data.results.s} />
        </MenuButton>
        <MenuList>
          <MenuItem href="/">Item 1</MenuItem>
          <MenuItem href="/" icon={PlaceholderIcon}>
            Item 2
          </MenuItem>
          <MenuItem href="/" icon={PlaceholderIcon}>
            Item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem href="/">Sign out</MenuItem>
        </MenuList>
      </MenuProvider>
    </div>
  )
}
