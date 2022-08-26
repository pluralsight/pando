import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function ButtonWithIconPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getButtonProps({
  icon: 'start'
})

<button {...button}>
  <PencilIcon {...getIconProps(iconOptions)} />
  Edit
</button>`}</CodeBlock>
  )
}

export function ButtonWithIconFullPreview() {
  return (
    <CodeBlock>{`import { getButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { PencilIcon } from '@pluralsight/icons'

export default function EditButton(props) {
  const { children, ...btnProps } = props
  const { button, iconOptions } = getButtonProps({
    ...btnProps,
    icon: 'start'
  })

  return (
    <button {...button}>
      <PencilIcon {...getIconProps(iconOptions)} />
      {props.children}
    </button>
  );
}`}</CodeBlock>
  )
}
