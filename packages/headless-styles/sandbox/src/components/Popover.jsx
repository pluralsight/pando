import { useState, useCallback, useEffect, useRef } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { CloseIcon } from '@pluralsight/icons'
import { getIconButtonProps, getIconProps, getPopoverProps } from '../../../src'
import positions from '../data/tooltipPositions.data.json'
import SimpleGrid from './SimpleGrid'

function PopoverEl(props) {
  const [expanded, setExpanded] = useState(false)
  const wrapperRef = useRef(null)
  const triggerRef = useRef(null)
  const popoverRef = useRef(null)
  const selectorList =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

  const getFirstFocusable = useCallback(() => {
    const focusableItems =
      popoverRef.current?.querySelectorAll(selectorList) ?? []
    return focusableItems[0]
  }, [popoverRef])

  const popoverProps = getPopoverProps({
    bodyId: `${props.id}-body`,
    headerId: `${props.id}-header`,
    id: props.id,
    isExpanded: expanded,
    position: props.position,
  })
  const iconButtonProps = getIconButtonProps(popoverProps.closeButtonOptions)
  const iconProps = getIconProps(iconButtonProps.iconOptions)

  function open() {
    setExpanded(true)
  }

  const close = useCallback(() => {
    setExpanded(false)
  }, [])

  function toggle() {
    if (expanded) {
      close()
    } else {
      open()
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }

  useEffect(() => {
    if (expanded) {
      getFirstFocusable().focus()
    } else {
      triggerRef.current?.focus()
    }
  }, [expanded, getFirstFocusable])

  useEffect(() => {
    function closeOutside(event) {
      if (expanded && !wrapperRef.current?.contains(event.target)) {
        close()
      }
    }

    document.addEventListener('click', closeOutside)

    return () => {
      document.removeEventListener('click', closeOutside)
    }
  }, [close, expanded])

  useEscToClose(close)

  return (
    <div {...popoverProps.wrapper} ref={wrapperRef}>
      <div
        {...popoverProps.trigger}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        ref={triggerRef}
      >
        {props.children}
      </div>
      <section {...popoverProps.popover} ref={popoverRef}>
        <header {...popoverProps.header}>{props.heading}</header>
        <div {...popoverProps.body}>Sample popover text goes here.</div>
        <span {...popoverProps.closeButtonWrapper}>
          <button {...iconButtonProps.button} onClick={close}>
            <CloseIcon {...iconProps} />
          </button>
        </span>
        <div {...popoverProps.pointer} />
      </section>
    </div>
  )
}

export default function Popover({ logJS }) {
  useEffect(() => {
    if (logJS) {
      // console.log(
      //   getJSPopoverProps({
      //     id: 'popoverJS-id',
      //   })
      // )
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
            >
              {position}
            </PopoverEl>
          </div>
        ))}
      </SimpleGrid>
    </div>
  )
}
