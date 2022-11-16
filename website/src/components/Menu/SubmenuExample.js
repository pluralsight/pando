import React from 'react'
import Container from '../Container/Container'
import { Menu, MenuItem, Submenu } from './Menu'

function SubmenuExample() {
  return (
    <Container>
      <Menu label="Submenu example">
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <Submenu label="Submenu">
          <MenuItem>First subitem</MenuItem>
          <MenuItem>Second subitem</MenuItem>
        </Submenu>
      </Menu>
    </Container>
  )
}

export default SubmenuExample
