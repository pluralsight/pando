import { useState, useCallback } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getTooltipProps } from '../../../src'
import positions from '../data/tooltipPositions.data.json'
import SimpleGrid from './SimpleGrid'

function TooltipEl(props) {
  const [disabled, setDisabled] = useState(false)

  const tooltipProps = getTooltipProps({
    id: props.id,
    position: props.position,
    disabled: disabled,
  })

  const disable = useCallback(() => {
    setDisabled(true)
  }, [])

  function enable() {
    setDisabled(false)
  }

  useEscToClose(disable)

  return (
    <div {...tooltipProps.wrapper} onMouseEnter={enable} onFocus={enable}>
      <div {...tooltipProps.trigger}>{props.children}</div>
      <div {...tooltipProps.tooltip}>
        <div {...tooltipProps.tooltipContent}>
          Sample tooltip text goes here.
        </div>
      </div>
    </div>
  )
}

export default function Tooltip() {
  return (
    <div id="tooltip">
      <h2>Tooltips</h2>
      <SimpleGrid cols="3">
        {positions.map((position) => (
          <div key={position}>
            <TooltipEl id={`tooltip:${position}`} position={position}>
              {position}
            </TooltipEl>
          </div>
        ))}
      </SimpleGrid>
    </div>
  )
}
