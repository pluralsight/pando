import React, { useState } from 'react'
import Container from '../Container/Container'
import { Menu, MenuItem } from './Menu'
import Select from '../Select/Select'

const positionOptions = [
  'topStart',
  'top',
  'topEnd',
  'rightStart',
  'right',
  'rightEnd',
  'bottomStart',
  'bottom',
  'bottomEnd',
  'leftStart',
  'left',
  'leftEnd',
]

function MenuPosition() {
  const [position, setPosition] = useState('bottomStart')

  function changePosition(event) {
    setPosition(event.target.value)
  }

  return (
    <Container type="column">
      <Select
        options={positionOptions}
        onChange={changePosition}
        label="Position"
        value={position}
      />

      <Menu position={position} label="Toggle menu">
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <MenuItem>Third item</MenuItem>
      </Menu>
    </Container>
  )
}

export default MenuPosition
