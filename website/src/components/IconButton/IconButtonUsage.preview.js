import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IconButtonUsagePreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getIconButtonProps({
  ariaLabel: 'Toggle menu',
  //highlight-next-line
  usage: 'square',
})

<button {...button}>
  <MenuIcon {...getIconProps(iconOptions)} />
</button>`}</CodeBlock>
  )
}

export function IconButtonUsageFullPreview() {
  return (
    <CodeBlock>{`import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'

export default function SquareMenuButton(props) {
  const { onClick, ...btnOptions } = props
  const { button, iconOptions } = getIconButtonProps({
    ...btnOptions,
    usage: 'square',
  })

  return (
    <button {...button} onClick={onClick}>
      <MenuIcon {...getIconProps(iconOptions)} />
    </button>
  )
}`}</CodeBlock>
  )
}
