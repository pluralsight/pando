import { getButtonProps, unstable_getTooltipProps } from '../../../src'

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
  const tooltipProps = unstable_getTooltipProps({
    id: `tooltip:${props.position}`,
    position: props.position,
  })

  return (
    <p>
      <span {...tooltipProps.wrapper}>
        <span {...tooltipProps.trigger}>{props.children}</span>
        <div {...tooltipProps.tooltip}>
          <div {...tooltipProps.tooltipContent}>
            Sample tooltip text goes here.
          </div>
        </div>
      </span>
    </p>
  )
}

export default function Tooltip() {
  const tooltipProps = unstable_getTooltipProps({
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
        <span {...tooltipProps.wrapper}>
          <button {...tooltipProps.trigger} {...getButtonProps().button}>
            Button with tooltip
          </button>
          <div {...tooltipProps.tooltip}>
            <div {...tooltipProps.tooltipContent}>
              Sample tooltip text goes here.
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
