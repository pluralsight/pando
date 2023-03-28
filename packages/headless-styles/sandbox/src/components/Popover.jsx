import { useState, useEffect, useRef } from 'react'
import { useEscToClose, useFocusTrap } from '../../../../react-utils/src'
import { CloseIcon, HelpCircleIcon } from '@pluralsight/icons'
import {
  getIconButtonProps,
  getIconProps,
  getTextLinkProps,
  getPopoverProps,
  getJSPopoverProps,
} from '../../../src'
import positions from '../data/tooltipPositions.data.json'
import SimpleGrid from './SimpleGrid'

function PopoverEl(props) {
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

        <HelpCircleIcon {...getIconProps(popoverProps.iconOptions)} />
      </button>

      {props.expanded && (
        <section {...popoverProps.popover} ref={ref}>
          <div {...popoverProps.content} onKeyDown={onKeyDown}>
            {props.heading && (
              <Header {...popoverProps.header}>{props.heading}</Header>
            )}
            <Body {...popoverProps.body} />
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
  return (
    <div {...props}>
      Some text that contain
      <a {...getTextLinkProps({ href: '/' }).link}>a link</a>
      in the middle.
    </div>
  )
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

export default function Popover({ logJS }) {
  const [expandedId, setExpandedId] = useState('')

  function handleClick(event) {
    setExpandedId(event.target.id)
  }

  function handleClose() {
    setExpandedId('')
  }

  useEscToClose(handleClose)
  useEffect(() => {
    if (logJS) {
      console.log(
        getJSPopoverProps({
          id: 'popoverJS-id',
        })
      )
    }
  }, [logJS])

  return (
    <div id="popover">
      <h2>Popover</h2>
      <SimpleGrid cols="3">
        {positions.map((position) => (
          <div key={position}>
            <PopoverEl
              id={`popover:${position}`}
              heading={position}
              position={position}
              triggerId={`trigger:${position}`}
              expanded={expandedId === `trigger:${position}`}
              onClick={handleClick}
              handleClose={handleClose}
            >
              {position}
            </PopoverEl>
          </div>
        ))}

        <PopoverEl
          id="popover:hidden-heading"
          title="Heading for non-sighted"
          triggerId={`trigger:hidden-heading`}
          expanded={expandedId === `trigger:hidden-heading`}
          onClick={handleClick}
          handleClose={handleClose}
        >
          Popover with non-visible heading
        </PopoverEl>
      </SimpleGrid>
    </div>
  )
}
