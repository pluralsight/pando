'use client'

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
import { type PropsWithChildren } from 'react'
import type { ToastProps } from '../context/Toast/types.js'
import { Show } from './Show.tsx'

interface MatchToastProps extends Pick<ToastProps, 'sentiment'> {
  iconOptions: IconOptions
}

function MatchToastIcon(props: MatchToastProps) {
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

// <Toast>

interface ToastElProps extends ToastOptions, Pick<ToastProps, 'onAction'> {
  onClose: () => void
}

export function Toast(props: PropsWithChildren<ToastElProps>) {
  const { children, onClose, onAction, sentiment } = props
  const toastProps = getToastContainerProps({ sentiment })
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

        <Show when={Boolean(onAction)} fallback={null}>
          <div>
            <button {...getToastButtonProps()} onClick={onAction}>
              Undo
            </button>
          </div>
        </Show>

        <span {...toastProps.closeIconWrapper}>
          <button {...closeBtnProps.button} onClick={onClose}>
            <CloseIcon {...getIconProps(closeBtnProps.iconOptions)} />
          </button>
        </span>
      </div>
    </div>
  )
}

// <ToastHeading>

export function ToastHeading(
  props: PropsWithChildren<Record<string, unknown>>,
) {
  const headingProps = getToastHeadingProps()
  return (
    <p {...headingProps}>
      <strong>{props.children}</strong>
    </p>
  )
}

// <ToastText>

export function ToastText(props: PropsWithChildren<Record<string, unknown>>) {
  return <p {...props} />
}
