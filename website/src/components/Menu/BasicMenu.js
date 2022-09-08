import React from 'react'
import Container from '../Container/Container'
import { Menu, MenuItem } from './Menu'

process.env = {
  RELEASE_CHANNEL: 'experimental',
  MENU_API: true,
}

function BasicMenu() {
  return (
    <Container>
      <Menu>
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <MenuItem>Third item</MenuItem>
      </Menu>
    </Container>
  )
}

export default BasicMenu
