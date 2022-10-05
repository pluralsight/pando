import { unstable_getTooltipProps } from '../../../src'

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
    position: props.position,
  })

  return (
    <p>
      <span {...tooltipProps.wrapper}>
        <span {...tooltipProps.trigger}>{props.children}</span>
        <span {...tooltipProps.tooltip}>Sample tooltip text goes here.</span>
      </span>
    </p>
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
          <TooltipEl key={position} position={position}>
            <span>{position}</span>
          </TooltipEl>
        ))}
      </div>
    </div>
  )
}
