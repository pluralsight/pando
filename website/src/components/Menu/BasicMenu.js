import React from 'react'
import Container from '../Container/Container'
import { Menu, MenuItem } from './Menu'

function BasicMenu() {
  return (
    <Container>
      <Menu label="Toggle menu">
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <MenuItem>Third item</MenuItem>
      </Menu>
    </Container>
  )
}

export default BasicMenu
