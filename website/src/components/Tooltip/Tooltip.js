import React, { useState, useCallback } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getTooltipProps } from '@pluralsight/headless-styles'

export default function Tooltip(props) {
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
        <div {...tooltipProps.tooltipContent}>{props.label}</div>
      </div>
    </div>
  )
}
