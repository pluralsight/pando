import React from 'react'
import Container from '../Container/Container'
import Popover from './Popover'

function BasicPopover() {
  return (
    <Container>
      <Popover
        id="basicPopover"
        heading="Popover Heading"
        content="Sample popover content goes here."
      >
        Basic Popover
      </Popover>
    </Container>
  )
}

export default BasicPopover
