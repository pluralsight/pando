'use client'

import {
  CheckCircleIcon,
  CloseIcon,
  DangerDiamondIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
} from '@pluralsight/icons'
import { type PropsWithChildren, type HTMLAttributes } from 'react'
import { createButtonIconProps } from '../helpers/button.helpers'
import type { Palettes } from './shared/types'
import { Show } from './Show'
import { toast, iconButton } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'

export type MatchToastProps = Pick<ToastElProps, 'palette'>

function MatchToastIcon(props: MatchToastProps) {
  const iconProps = {
    'aria-hidden': true,
    height: '2.5rem',
    width: '2.5rem',
  }

  switch (props.palette) {
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

export type ToastPalette = Exclude<Palettes, 'action' | 'neutral'>
export interface ToastElProps {
  palette: ToastPalette
  onClose: () => void
  onAction?: () => void
}

export function Toast(props: PropsWithChildren<ToastElProps>) {
  const { palette } = props

  return (
    <div className={toast({ palette }).root}>
      <div className={toast({ palette }).container}>
        <span className={toast({ palette }).featureIcon}>
          <MatchToastIcon palette={palette} />
        </span>

        <section className={toast({ palette }).main}>{props.children}</section>

        <Show when={Boolean(props.onAction)}>
          <div>
            <button
              className={toast({ palette }).undoBtn}
              onClick={props.onAction}
            >
              Undo
            </button>
          </div>
        </Show>

        <span className={toast({ palette }).closeRoot}>
          <button
            className={iconButton({
              palette: props.palette,
              usage: 'text',
              size: 'sm',
            })}
            onClick={props.onClose}
          >
            <CloseIcon {...createButtonIconProps()} />
          </button>
        </span>
      </div>
    </div>
  )
}

// <ToastHeading>

export interface ToastHeadingProps
  extends HTMLAttributes<HTMLParagraphElement> {
  palette?: ToastPalette
}

export function ToastHeading(props: PropsWithChildren<ToastHeadingProps>) {
  const { palette, ...nativeProps } = props
  return (
    <p
      {...nativeProps}
      className={cx(nativeProps.className, toast({ palette }).heading)}
    >
      <strong>{nativeProps.children}</strong>
    </p>
  )
}

// <ToastText>

export type ToastTextProps = HTMLAttributes<HTMLParagraphElement>

export function ToastText(props: PropsWithChildren<ToastTextProps>) {
  return <p {...props} />
}
