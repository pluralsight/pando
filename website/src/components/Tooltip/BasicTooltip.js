import React from 'react'
import Container from '../Container/Container'
import Tooltip from './Tooltip'

function BasicTooltip() {
  return (
    <Container>
      <Tooltip id="basicTooltip" label="Tooltip content goes here">
        Basic Tooltip
      </Tooltip>
    </Container>
  )
}

export default BasicTooltip
