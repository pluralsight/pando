import React from 'react'
import Container from '../Container/Container'
import Tooltip from './Tooltip'
import positions from './tooltipPositions.data.json'

function BasicTooltip() {
  return (
    <Container type="grid" gridColumns={5}>
      {positions.map((position) => {
        if (position) {
          return (
            <div key={position}>
              <Tooltip id={`tooltip:${position}`} position={position}>
                {position}
              </Tooltip>
            </div>
          )
        }

        return <div key={position} />
      })}
    </Container>
  )
}

export default BasicTooltip
