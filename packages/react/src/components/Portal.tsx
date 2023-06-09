import { type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface ProtalProps {
  mount?: HTMLElement
  portalKey?: string
}

export function Portal(props: PropsWithChildren<ProtalProps>) {
  const { mount = document.body } = props
  return createPortal(props.children, mount, props.portalKey)
}
