import React, { type PropsWithChildren, type HTMLAttributes } from 'react'
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

function MatchIcon(props: AdmonitionOptions['sentiment']) {
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

interface AdmonitionProps
  extends HTMLAttributes<HTMLDivElement>,
    AdmonitionOptions {
  onClose: () => void
}

function Admonition(props: PropsWithChildren<AdmonitionProps>) {
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

function AdmonitionHeading(props: PropsWithChildren<AdmonitionHeadingProps>) {
  const { children, className, ...nativeProps } = props
  const heading = getAdmonitionHeadingProps(splitClassNameProp(className))

  return (
    <p {...heading} {...nativeProps}>
      <strong>{children}</strong>
    </p>
  )
}

type AdmonitionTextProps = HTMLAttributes<HTMLParagraphElement>

function AdmonitionText(props: PropsWithChildren<AdmonitionTextProps>) {
  const { children, className, ...nativeProps } = props
  const text = getAdmonitionTextProps(splitClassNameProp(className))

  return (
    <small {...text} {...nativeProps}>
      {children}
    </small>
  )
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

export default function AdmonitionPage() {
  return (
    <div id="admonition">
      <h2>Admonition</h2>

      <h3>CSS</h3>
      <div className="App-container column">
        <Admonition sentiment="info">
          <AdmonitionHeading>Info admonition</AdmonitionHeading>
          <AdmonitionText>
            This is an example info admonition about some information.
          </AdmonitionText>
        </Admonition>
        <br />
        <Admonition sentiment="info" onClose={() => null}>
          <AdmonitionHeading>Closable admonition</AdmonitionHeading>
          <AdmonitionText>
            This is an example info admonition with a close button.
          </AdmonitionText>
        </Admonition>
        <br />
        <Admonition sentiment="success">
          <AdmonitionHeading>Success admonition</AdmonitionHeading>
          <AdmonitionText>
            This is an example success admonition about some information.
          </AdmonitionText>
        </Admonition>
        <br />
        <Admonition sentiment="warning">
          <AdmonitionHeading>Warning admonition</AdmonitionHeading>
          <AdmonitionText>
            This is an example warning admonition about some information.
          </AdmonitionText>
        </Admonition>
        <br />
        <Admonition sentiment="danger">
          <AdmonitionHeading>Danger admonition</AdmonitionHeading>
          <AdmonitionText>
            This is an example danger admonition about some information.
          </AdmonitionText>
        </Admonition>
      </div>
    </div>
  )
}
