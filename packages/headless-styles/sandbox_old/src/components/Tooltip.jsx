import { useState, useCallback, useEffect } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getTooltipProps, getJSTooltipProps } from '../../../src'
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

function TooltipJS(props) {
  const [disabled, setDisabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [focused, setFocused] = useState(false)

  const tooltipProps = getJSTooltipProps({
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

  function handleHover() {
    setHovering(true)
  }

  function handleHoverEnd() {
    setHovering(false)
  }

  function handleFocus() {
    enable()
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  useEscToClose(disable)

  return (
    <div
      onMouseEnter={enable}
      onMouseOver={handleHover}
      onMouseOut={handleHoverEnd}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...tooltipProps.wrapper.a11yProps}
      style={{
        ...tooltipProps.wrapper.styles,
      }}
    >
      <div
        style={{
          ...tooltipProps.trigger.styles,
          ...(focused && {
            ...tooltipProps.trigger.styles['&:focus'],
          }),
        }}
        {...tooltipProps.trigger.a11yProps}
      >
        {props.children}
      </div>
      <div
        style={{
          ...tooltipProps.tooltip.styles,
          ...(!disabled &&
            (hovering || focused) && {
              ...tooltipProps.tooltip.styles[
                "&:not([data-disabled='true']):hover"
              ],
              opacity: 1,
            }),
        }}
        {...tooltipProps.tooltip.a11yProps}
      >
        <div
          style={tooltipProps.tooltipContent.styles}
          {...tooltipProps.tooltipContent.a11yProps}
        >
          Sample tooltip text goes here.
          <span style={tooltipProps.tooltipContent.styles['&::after']} />
        </div>
        <span style={tooltipProps.tooltip.styles['&::after']} />
      </div>
    </div>
  )
}

export default function Tooltip({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(
        getJSTooltipProps({
          id: 'tooltipJS-id',
        })
      )
    }
  }, [logJS])

  return (
    <div id="tooltip">
      <h2>Tooltips</h2>

      <h3>CSS</h3>
      <SimpleGrid cols="3">
        {positions.map((position) => (
          <div key={position}>
            <TooltipEl id={`tooltip:${position}`} position={position}>
              {position}
            </TooltipEl>
          </div>
        ))}
      </SimpleGrid>

      <h3>JS</h3>
      <SimpleGrid cols="3">
        {positions.map((position) => (
          <div key={position}>
            <TooltipJS id={`tooltip:${position}`} position={position}>
              {position}
            </TooltipJS>
          </div>
        ))}
      </SimpleGrid>
    </div>
  )
}
