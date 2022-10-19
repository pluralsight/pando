import React from 'react'
import Container from '../Container/Container'
import Tooltip from './Tooltip'
import positions from './tooltipPositions.data.json'

function BasicTooltip() {
  return (
    <Container type="grid" gridColumns={3}>
      {positions.map((position) => {
        if (position) {
          return (
            <div key={position}>
              <Tooltip
                id={`tooltip:${position}`}
                position={position}
                label="Sample tooltip content"
              >
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
