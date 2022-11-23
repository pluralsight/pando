import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicPopoverPreview() {
  return (
    <CodeBlock>{`<div {...popoverProps.wrapper}>
  <span {...popoverProps.trigger}>
    Basic popover
  </span>
  <section {...popoverProps.popover}>
    <div {...popoverProps.content}>
      {props.heading && (
        <header {...popoverProps.header}>{props.heading}</header>
      )}
      <div {...popoverProps.body}>{props.content}</div>
      <span {...popoverProps.closeButtonWrapper}>
        <button {...iconButtonProps.button}>
          <CloseIcon {...getIconProps(iconButtonProps.iconOptions)} />
        </button>
      </span>
    </div>
  </section>
</div>`}</CodeBlock>
  )
}

export function BasicPopoverFullPreview() {
  return (
    <CodeBlock>{`import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { CloseIcon } from '@pluralsight/icons'
import {
  getIconButtonProps,
  getIconProps,
  getPopoverProps,
} from '@pluralsight/headless-styles'

export default function Popover(props) {
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
    bodyId: \`\${props.id}-body\`,
    headerId: props.heading && \`\${props.id}-header\`,
    ariaLabel: props.label,
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
      <span
        {...popoverProps.trigger}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        ref={triggerRef}
      >
        {props.children}
      </span>
      <section {...popoverProps.popover} ref={popoverRef}>
        <div {...popoverProps.content}>
          {props.heading && (
            <header {...popoverProps.header}>{props.heading}</header>
          )}
          <div {...popoverProps.body}>{props.content}</div>
          <span {...popoverProps.closeButtonWrapper}>
            <button {...iconButtonProps.button} onClick={close}>
              <CloseIcon {...iconProps} />
            </button>
          </span>
        </div>
      </section>
    </div>
  )
  }`}</CodeBlock>
  )
}
