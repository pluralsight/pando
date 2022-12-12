import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicTextLinkPreview() {
  return (
    <CodeBlock>{`<a {...link}>Local link</a>

<a {...link}>
  External link
  <ExternalLinkIcon {...getIconProps(iconOptions)} />
</a>`}</CodeBlock>
  )
}

export function BasicTextLinkFullPreview() {
  return (
    <CodeBlock>{`import { getIconProps, getTextLinkProps } from '@pluralsight/headless-styles'
import { ExternalLinkIcon } from '@pluralsight/icons'

export default function TextLink(props) {
  const { link, iconOptions } = getTextLinkProps({ href: props.href })
  const isExternal = link.rel?.includes('external')

  return (
    <a {...link}>
      {props.children}

      {isExternal && (
        <ExternalLinkIcon {...getIconProps(iconOptions)} />
      )}
    </a>
  )
}`}</CodeBlock>
  )
}
