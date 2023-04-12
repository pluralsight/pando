import React, { type PropsWithChildren, useState } from 'react'
import {
  CheckCircleIcon,
  CloseIcon,
  DangerDiamondIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
} from '@pluralsight/icons'
import {
  getIconButtonProps,
  getIconProps,
  getToastButtonProps,
  getToastContainerProps,
  getToastHeadingProps,
} from '@pluralsight/headless-styles'
import type {
  IconOptions,
  ToastOptions,
} from '@pluralsight/headless-styles/types'

interface MatchToastIconProps extends Required<ToastOptions> {
  iconOptions: IconOptions
}

function MatchToastIcon(props: MatchToastIconProps) {
  const iconProps = getIconProps(props.iconOptions)

  switch (props.sentiment) {
    case 'success':
      return <CheckCircleIcon {...iconProps} />

    case 'warning':
      return <WarningTriangleIcon {...iconProps} />

    case 'danger':
      return <DangerDiamondIcon {...iconProps} />

    case 'info':
    default:
      return <InfoCircleIcon {...iconProps} />
  }
}

interface ToastProps extends Required<ToastOptions> {
  onClose: () => void
  onUndo?: () => void
}

export function Toast(props: PropsWithChildren<ToastProps>) {
  const { children, onClose, onUndo, sentiment, ...toastOptions } = props
  const toastProps = getToastContainerProps({ sentiment, ...toastOptions })
  const closeBtnProps = getIconButtonProps(toastProps.closeButtonOptions)

  return (
    <div {...toastProps.wrapper} style={{ top: 'initial' }}>
      <div {...toastProps.container}>
        <span {...toastProps.iconWrapper}>
          <MatchToastIcon
            sentiment={sentiment}
            iconOptions={toastProps.iconOptions}
          />
        </span>

        <section {...toastProps.section}>{children}</section>

        {onUndo && (
          <div>
            <button {...getToastButtonProps(sentiment)} onClick={onUndo}>
              Undo
            </button>
          </div>
        )}

        <span {...toastProps.closeIconWrapper}>
          <button {...closeBtnProps.button} onClick={onClose}>
            <CloseIcon {...getIconProps(closeBtnProps.iconOptions)} />
          </button>
        </span>
      </div>
    </div>
  )
}

function ToastHeading(props: PropsWithChildren<{}>) {
  const headingProps = getToastHeadingProps()
  return (
    <p {...headingProps}>
      <strong>{props.children}</strong>
    </p>
  )
}

function SuccessToast(props: ToastProps) {
  return (
    <Toast sentiment="success" onClose={props.onClose}>
      <ToastHeading>Success</ToastHeading>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

function InfoToast(props: ToastProps) {
  return (
    <Toast sentiment="info" onClose={props.onClose} onUndo={() => null}>
      <p>A channel has been added.</p>
    </Toast>
  )
}

function WarningToast(props: ToastProps) {
  return (
    <Toast sentiment="warning" onClose={props.onClose} onUndo={() => null}>
      <ToastHeading>Warning</ToastHeading>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

function DangerToast(props: ToastProps) {
  return (
    <Toast sentiment="danger" onClose={props.onClose}>
      <ToastHeading>Danger</ToastHeading>
      <p>A channel has been deleted.</p>
    </Toast>
  )
}

function MatchToast(props: ToastProps) {
  switch (props.sentiment) {
    case 'success':
      return <SuccessToast {...props} />

    case 'warning':
      return <WarningToast {...props} />

    case 'danger':
      return <DangerToast {...props} />

    case 'info':
    default:
      return <InfoToast {...props} />
  }
}

const sentiments: ToastOptions['sentiment'][] = [
  'success',
  'info',
  'warning',
  'danger',
]

export default function ToastPage() {
  const [, setShowToast] = useState(false)

  function handleHideToast() {
    setShowToast(false)
  }

  return (
    <div>
      <h1>Toast</h1>
      <ul
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
        }}
      >
        {sentiments.map((sentiment) => (
          <li
            key={sentiment}
            style={{
              paddingTop: '7rem',
            }}
          >
            <MatchToast sentiment={sentiment} onClose={handleHideToast} />
          </li>
        ))}
      </ul>
    </div>
  )
}
