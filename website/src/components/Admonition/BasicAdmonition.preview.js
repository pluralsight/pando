import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicAdmonitionPreview() {
  return (
    <CodeBlock>{`<div {...admonition.wrapper}>
  <span {...admonition.iconWrapper}>
    <InfoCircleIcon {...getIconProps(admonition.iconOptions)} />
  </span>
  <div {...admonition.textContainer}>
    <strong><p {...admonition.title}>Info admonition</p></strong>
    <small {...admonition.description}>
      This is an example of an informational admonition.
    </small>
  </div>
</div>`}</CodeBlock>
  )
}

export function BasicAdmonitionFullPreview() {
  return (
    <CodeBlock>{`import {
  getAdmonitionProps,
  getIconProps,
  getIconButtonProps
} from '@pluralsight/headless-styles'
import { InfoCircleIcon, CheckCircleIcon, CloseIcon, WarningTriangleIcon } from '@pluralsight/icons'

function matchIconType(sentimentOption) {
  switch (sentimentOption) {
    case 'success':
      return CheckCircleIcon

    case 'danger':
    case 'warning':
      return WarningTriangleIcon

    default:
      return InfoCircleIcon
  }
}

export default function Admonition(props) {
  const { sentiment } = props
  const admonition = getAdmonitionProps({ sentiment })
  const { button, iconOptions } = getIconButtonProps(admonition.iconButtonOptions)
  const Icon = matchIconType(sentiment)

  return (
    <div {...admonition.wrapper}>
      <span {...admonition.iconWrapper}>
        <Icon {...getIconProps(admonition.iconOptions)} />
      </span>
      <div {...admonition.textContainer}>
        <strong><p {...admonition.title}>{props.admonitionTitle}</p></strong>
        <small {...admonition.description}>{props.description}</small>
      </div>
      {props.showButton && (
        <button {...button}>
          <CloseIcon {...getIconProps(iconOptions)} />
        </button>
      )}
    </div>
  )
}`}</CodeBlock>
  )
}
