import React, { useRef } from 'react'
import { useFocusTrap } from '@pluralsight/react-utils'
import { CloseIcon } from '@pluralsight/icons'
import {
  getIconButtonProps,
  getIconProps,
  getPopoverProps,
} from '@pluralsight/headless-styles'

export default function Popover(props) {
  const triggerRef = useRef(null)
  const popoverProps = getPopoverProps({
    bodyId: `${props.id}-body`,
    headerId: props.heading && `${props.id}-header`,
    ariaLabel: props.title,
    id: props.id,
    isExpanded: props.expanded,
    position: props.position,
  })
  const { ref, onKeyDown } = useFocusTrap(triggerRef)

  return (
    <div {...popoverProps.wrapper}>
      <button
        {...popoverProps.trigger}
        onClick={props.onClick}
        ref={triggerRef}
        id={props.triggerId}
      >
        {props.children}
      </button>

      {props.expanded && (
        <section {...popoverProps.popover} ref={ref}>
          <div {...popoverProps.content} onKeyDown={onKeyDown}>
            {props.heading && (
              <Header {...popoverProps.header}>{props.heading}</Header>
            )}
            <Body {...popoverProps.body}>{props.content}</Body>
            <CloseButton {...popoverProps} onClick={props.handleClose} />
          </div>
        </section>
      )}
    </div>
  )
}

function Header(props) {
  const { children, ...popoverProps } = props
  return <header {...popoverProps}>{children}</header>
}

function Body(props) {
  const { children, ...popoverProps } = props

  return <div {...popoverProps}>{children}</div>
}

function CloseButton(props) {
  const { onClick, ...popoverProps } = props
  const iconButtonProps = getIconButtonProps(popoverProps.closeButtonOptions)
  const iconProps = getIconProps(iconButtonProps.iconOptions)

  return (
    <span {...popoverProps.closeButtonWrapper}>
      <button {...iconButtonProps.button} onClick={onClick}>
        <CloseIcon {...iconProps} />
      </button>
    </span>
  )
}
