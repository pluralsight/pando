import { useState } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getTooltipProps } from '../../../src'
import positions from './tooltipPositions.data.json'

function TooltipEl(props) {
  const [disabled, setDisabled] = useState(false)

  const tooltipProps = getTooltipProps({
    id: props.id,
    position: props.position,
    disabled: disabled,
  })

  function disable() {
    setDisabled(true)
  }

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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridAutoFlow: 'row',
          gap: '1rem',
          width: '50rem',
          margin: '0 auto',
        }}
      >
        {positions.map((position) => (
          <div key={position}>
            <TooltipEl id={`tooltip:${position}`} position={position}>
              {position}
            </TooltipEl>
          </div>
        ))}
      </div>
    </div>
  )
}
