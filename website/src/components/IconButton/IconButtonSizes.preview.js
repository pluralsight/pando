import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IconButtonSizesPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getIconButtonProps({
  ariaLabel: 'Go to next page',
  //highlight-next-line
  size: 'l'
})

<button {...button}>
  <PlaceholderIcon {...getIconProps(iconOptions)} />
</button>`}</CodeBlock>
  )
}

export function IconButtonSizesFullPreview() {
  return (
    <CodeBlock>{`import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'

export default function NextButton(props) {
  const { onClick, ...btnOptions } = props
  const { button, iconOptions } = getIconButtonProps(btnOptions)

  return (
    <button {...button} onClick={onClick}>
      <ChevronRightIcon {...getIconProps(iconOptions)} />
    </button>
  )
}`}</CodeBlock>
  )
}
