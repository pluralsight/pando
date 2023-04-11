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
  getToastContainerProps,
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
}

export function Toast(props: PropsWithChildren<ToastProps>) {
  const { children, onClose, ...toastOptions } = props
  const toastProps = getToastContainerProps(toastOptions)
  const closeBtnProps = getIconButtonProps(toastProps.closeButtonOptions)

  return (
    <div {...toastProps.wrapper} style={{ top: 'initial' }}>
      <div {...toastProps.container}>
        <span {...toastProps.iconWrapper}>
          <MatchToastIcon
            sentiment={props.sentiment}
            iconOptions={toastProps.iconOptions}
          />
        </span>

        <section {...toastProps.section}>{children}</section>

        <span {...toastProps.closeIconWrapper}>
          <button {...closeBtnProps.button} onClick={onClose}>
            <CloseIcon {...getIconProps(closeBtnProps.iconOptions)} />
          </button>
        </span>
      </div>
    </div>
  )
}

function SuccessToast(props: ToastProps) {
  return (
    <Toast sentiment="success" onClose={props.onClose}>
      <h5>Success</h5>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

function InfoToast(props: ToastProps) {
  return (
    <Toast sentiment="info" onClose={props.onClose}>
      <h5>Info</h5>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

function WarningToast(props: ToastProps) {
  return (
    <Toast sentiment="warning" onClose={props.onClose}>
      <h5>Warning</h5>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

function DangerToast(props: ToastProps) {
  return (
    <Toast sentiment="danger" onClose={props.onClose}>
      <h5>Danger</h5>
      <p>This is a description of something that happened.</p>
    </Toast>
  )
}

function MatchToast(props: ToastProps) {
  switch (props.sentiment) {
    case 'success':
      return <SuccessToast onClose={props.onClose} />

    case 'warning':
      return <WarningToast onClose={props.onClose} />

    case 'danger':
      return <DangerToast onClose={props.onClose} />

    case 'info':
    default:
      return <InfoToast onClose={props.onClose} />
  }
}

const sentiments = ['success', 'info', 'warning', 'danger']

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
              paddingTop: '6rem',
            }}
          >
            <MatchToast sentiment={sentiment} onClose={handleHideToast} />
          </li>
        ))}
      </ul>
    </div>
  )
}
