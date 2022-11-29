import React, { useState } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import Container from '../Container/Container'
import Popover from './Popover'

function BasicPopover() {
  const [expanded, setExpanded] = useState(false)
  const triggerId = 'popover-example-trigger'

  function handleClick() {
    setExpanded((prev) => !prev)
  }

  function handleClose() {
    setExpanded(false)
  }

  useEscToClose(handleClose)

  return (
    <Container>
      <Popover
        id={`popover-example`}
        heading="Popover heading"
        triggerId={triggerId}
        expanded={expanded}
        onClick={handleClick}
        handleClose={handleClose}
        content={
          <span>
            Popover content may contain <a href="/">links</a> and other elements
            and markup.
          </span>
        }
      >
        Basic popover
      </Popover>
    </Container>
  )
}

export default BasicPopover
