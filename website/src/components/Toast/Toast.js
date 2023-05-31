import React from 'react'
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

function MatchToastIcon(props) {
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

export function Toast(props) {
  const { children, onClose, onUndo, sentiment, ...toastOptions } = props
  const toastProps = getToastContainerProps({ sentiment, ...toastOptions })
  const closeBtnProps = getIconButtonProps(toastProps.closeButtonOptions)

  return (
    <div {...toastProps.wrapper}>
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

export function ToastHeading(props) {
  const headingProps = getToastHeadingProps()
  return (
    <p {...headingProps} data-site-override="clearMargin">
      <strong>{props.children}</strong>
    </p>
  )
}

export function SuccessToast(props) {
  return (
    <Toast sentiment="success" onClose={props.onClose}>
      <ToastHeading>Success</ToastHeading>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

export function InfoToast(props) {
  return (
    <Toast sentiment="info" onClose={props.onClose} onUndo={() => null}>
      <p>A channel has been added.</p>
    </Toast>
  )
}

export function WarningToast(props) {
  return (
    <Toast sentiment="warning" onClose={props.onClose} onUndo={() => null}>
      <ToastHeading>Warning</ToastHeading>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

export function DangerToast(props) {
  return (
    <Toast sentiment="danger" onClose={props.onClose}>
      <ToastHeading>Danger</ToastHeading>
      <p>A channel has been deleted.</p>
    </Toast>
  )
}
