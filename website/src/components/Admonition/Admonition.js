import React from 'react'
import {
  getAdmonitionProps,
  getIconProps,
  getIconButtonProps,
} from '@pluralsight/headless-styles'
import {
  InfoCircleIcon,
  CheckCircleIcon,
  CloseIcon,
  DangerDiamondIcon,
  WarningTriangleIcon,
} from '@pluralsight/icons'

function matchIconType(sentimentOption) {
  switch (sentimentOption) {
    case 'success':
      return CheckCircleIcon

    case 'danger':
      return DangerDiamondIcon

    case 'warning':
      return WarningTriangleIcon

    default:
      return InfoCircleIcon
  }
}

export default function Admonition(props) {
  const { sentiment } = props
  const admonition = getAdmonitionProps({ sentiment })
  const { button, iconOptions } = getIconButtonProps(
    admonition.iconButtonOptions
  )
  const Icon = matchIconType(sentiment)

  return (
    <div {...admonition.wrapper}>
      <span {...admonition.iconWrapper}>
        <Icon {...getIconProps(admonition.iconOptions)} />
      </span>
      <div {...admonition.textContainer}>
        <p {...admonition.title} style={{ margin: 0 }}>
          <strong>{props.admonitionTitle}</strong>
        </p>
        <small {...admonition.description}>{props.description}</small>
      </div>
      {props.showButton && (
        <button {...button}>
          <CloseIcon {...getIconProps(iconOptions)} />
        </button>
      )}
    </div>
  )
}
