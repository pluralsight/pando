import { useState } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getButtonProps, getTooltipProps } from '../../../src'

const positions = [
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

function TooltipEl(props) {
  const [disabled, setDisabled] = useState(false)

  const tooltipProps = getTooltipProps({
    id: `tooltip:${props.position}`,
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
    <div>
      <div {...tooltipProps.wrapper} onMouseLeave={enable} onBlur={enable}>
        <div {...tooltipProps.trigger}>{props.children}</div>
        <div {...tooltipProps.tooltip}>
          <div {...tooltipProps.tooltipContent}>
            Sample tooltip text goes here.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tooltip() {
  const tooltipProps = getTooltipProps({
    id: 'tooltipButtonTest',
  })

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
          <TooltipEl key={position} position={position}>
            {position}
          </TooltipEl>
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <div {...tooltipProps.wrapper}>
          <button {...tooltipProps.trigger} {...getButtonProps().button}>
            Button with tooltip
          </button>
          <div {...tooltipProps.tooltip}>
            <div {...tooltipProps.tooltipContent}>
              Sample tooltip text goes here.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
