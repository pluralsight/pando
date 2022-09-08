import React, { useState } from 'react'
import Container from '../Container/Container'
import { Menu, MenuItem, Submenu } from './Menu'

function SubmenuExample() {
  const [expanded, setExpanded] = useState(false)

  function toggleSubmenu() {
    setExpanded((prev) => !prev)
  }

  return (
    <Container>
      <Menu>
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <Submenu label="Submenu" expanded={expanded} onClick={toggleSubmenu}>
          <MenuItem>First subitem</MenuItem>
          <MenuItem>Second subitem</MenuItem>
        </Submenu>
      </Menu>
    </Container>
  )
}

export default SubmenuExample
