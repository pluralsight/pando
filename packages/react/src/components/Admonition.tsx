import { type PropsWithChildren, type HTMLAttributes } from 'react'
import {
  getAdmonitionProps,
  getAdmonitionHeadingProps,
  getAdmonitionTextProps,
  getAdmonitionIconProps,
  getAdmonitionCloseButtonProps,
  getIconProps,
  getIconButtonProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { AdmonitionOptions } from '@pluralsight/headless-styles/types'
import {
  CloseIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
  DangerDiamondIcon,
  CheckCircleIcon,
} from '@pluralsight/icons'

type MatchIconProps = Exclude<AdmonitionOptions, 'classNames'>

function MatchIcon(props: MatchIconProps) {
  const iconProps = getIconProps(getAdmonitionIconProps())

  switch (props.sentiment) {
    case 'info':
      return <InfoCircleIcon {...iconProps} />

    case 'warning':
      return <WarningTriangleIcon {...iconProps} />

    case 'danger':
      return <DangerDiamondIcon {...iconProps} />

    case 'success':
      return <CheckCircleIcon {...iconProps} />

    default:
      return <InfoCircleIcon {...iconProps} />
  }
}

function AdmonitionCloseButton(props: HTMLAttributes<HTMLButtonElement>) {
  const { className, ...nativeProps } = props
  const { button, iconOptions } = getIconButtonProps(
    getAdmonitionCloseButtonProps(splitClassNameProp(className))
  )

  return (
    <button {...button} {...nativeProps}>
      <CloseIcon {...getIconProps(iconOptions)} />
    </button>
  )
}

// Public API

interface AdmonitionProps
  extends HTMLAttributes<HTMLDivElement>,
    AdmonitionOptions {
  onClose?: () => void
}

export function Admonition(props: PropsWithChildren<AdmonitionProps>) {
  const { sentiment, children, className, onClose, ...nativeDivProps } = props
  const admonition = getAdmonitionProps({
    classNames: splitClassNameProp(className),
    sentiment,
  })

  return (
    <div {...admonition.wrapper} {...nativeDivProps}>
      <span {...admonition.iconWrapper}>
        <MatchIcon sentiment={sentiment} />
      </span>
      <div {...admonition.textContainer}>{children}</div>
      {onClose && <AdmonitionCloseButton onClick={onClose} />}
    </div>
  )
}

type AdmonitionHeadingProps = HTMLAttributes<HTMLParagraphElement>

export function AdmonitionHeading(
  props: PropsWithChildren<AdmonitionHeadingProps>
) {
  const { children, className, ...nativeProps } = props
  const heading = getAdmonitionHeadingProps(splitClassNameProp(className))

  return (
    <p {...heading} {...nativeProps}>
      <strong>{children}</strong>
    </p>
  )
}

type AdmonitionTextProps = HTMLAttributes<HTMLParagraphElement>

export function AdmonitionText(props: PropsWithChildren<AdmonitionTextProps>) {
  const { children, className, ...nativeProps } = props
  const text = getAdmonitionTextProps(splitClassNameProp(className))

  return (
    <small {...text} {...nativeProps}>
      {children}
    </small>
  )
}
