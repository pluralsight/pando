import {
  forwardRef,
  type MouseEventHandler,
  type PropsWithChildren,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react'
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

// <Admonition />

interface AdmonitionProps
  extends HTMLAttributes<HTMLDivElement>,
    AdmonitionOptions {
  onClose?: MouseEventHandler<HTMLButtonElement>
}

function AdmonitionEl(
  props: PropsWithChildren<AdmonitionProps>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { sentiment, children, className, onClose, ...nativeDivProps } = props
  const admonition = getAdmonitionProps({
    classNames: splitClassNameProp(className),
    sentiment,
  })

  return (
    <div {...admonition.wrapper} {...nativeDivProps} ref={ref}>
      <span {...admonition.iconWrapper}>
        <MatchIcon sentiment={sentiment} />
      </span>
      <div {...admonition.textContainer}>{children}</div>
      {onClose && <AdmonitionCloseButton onClick={onClose} />}
    </div>
  )
}

// <AdmonitionHeading />

type AdmonitionHeadingProps = HTMLAttributes<HTMLParagraphElement>

function AdmonitionHeadingEl(
  props: PropsWithChildren<AdmonitionHeadingProps>,
  ref: ForwardedRef<HTMLParagraphElement>
) {
  const { children, className, ...nativeProps } = props
  const heading = getAdmonitionHeadingProps(splitClassNameProp(className))

  return (
    <p {...heading} {...nativeProps} ref={ref}>
      <strong>{children}</strong>
    </p>
  )
}

// <AdmonitionText />

type AdmonitionTextProps = HTMLAttributes<HTMLParagraphElement>

function AdmonitionTextEl(
  props: PropsWithChildren<AdmonitionTextProps>,
  ref: ForwardedRef<HTMLParagraphElement>
) {
  const { children, className, ...nativeProps } = props
  const text = getAdmonitionTextProps(splitClassNameProp(className))

  return (
    <small {...text} {...nativeProps} ref={ref}>
      {children}
    </small>
  )
}

// public exports

export const Admonition = forwardRef<HTMLDivElement, AdmonitionProps>(
  AdmonitionEl
)

export const AdmonitionHeading = forwardRef<
  HTMLParagraphElement,
  AdmonitionHeadingProps
>(AdmonitionHeadingEl)

export const AdmonitionText = forwardRef<
  HTMLParagraphElement,
  AdmonitionTextProps
>(AdmonitionTextEl)
