import { type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  mount?: HTMLElement
  portalKey?: string
}

export function Portal(props: PropsWithChildren<PortalProps>) {
  const { mount = document.body } = props
  return createPortal(props.children, mount, props.portalKey)
}
