'use client'

import {
  forwardRef,
  type MouseEventHandler,
  type PropsWithChildren,
  type HTMLAttributes,
  type ForwardedRef,
  useMemo,
} from 'react'
import {
  CloseIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
  DangerDiamondIcon,
  CheckCircleIcon,
} from '@pluralsight/icons'
import { createButtonIconProps } from '../helpers/button.helpers'
import type { Palettes } from './shared/types'
import { IconButton, type IconButtonProps } from './IconButton'
import { Show } from './Show'
import { admonition } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'

export type AdmonitionPalette = Exclude<Palettes, 'action' | 'neutral'>

function MatchIcon(props: { palette?: AdmonitionPalette }) {
  const iconProps = createButtonIconProps()

  switch (props.palette) {
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

// <AdmonitionCloseButton />

function AdmonitionCloseButton(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <CloseIcon {...createButtonIconProps()} />
    </IconButton>
  )
}

// <Admonition />

export interface AdmonitionProps extends HTMLAttributes<HTMLDivElement> {
  palette?: AdmonitionPalette
  onClose?: MouseEventHandler<HTMLButtonElement>
}

function AdmonitionEl(
  props: PropsWithChildren<AdmonitionProps>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { palette, children, onClose, ...nativeDivProps } = props
  const styles = useMemo(() => {
    switch (palette) {
      case 'success':
        return admonition({ palette: 'success' })
      case 'warning':
        return admonition({ palette: 'warning' })
      case 'danger':
        return admonition({ palette: 'danger' })
      default:
        return admonition()
    }
  }, [palette])

  return (
    <div
      {...nativeDivProps}
      className={cx(nativeDivProps.className, styles.root)}
      role="region"
      ref={ref}
    >
      <span className={styles.featureIcon}>
        <MatchIcon palette={palette} />
      </span>
      <div className={styles.main}>{children}</div>
      <Show when={Boolean(onClose)}>
        <AdmonitionCloseButton
          ariaLabel="Close admonition"
          onClick={onClose}
          palette={palette}
          size="md"
          usage="text"
        />
      </Show>
    </div>
  )
}

// <AdmonitionHeading />

type AdmonitionHeadingProps = HTMLAttributes<HTMLParagraphElement>

function AdmonitionHeadingEl(
  props: PropsWithChildren<AdmonitionHeadingProps>,
  ref: ForwardedRef<HTMLParagraphElement>,
) {
  const { children, ...nativeProps } = props
  const styles = admonition()

  return (
    <p
      {...nativeProps}
      className={cx(nativeProps.className, styles.heading)}
      ref={ref}
    >
      <strong>{children}</strong>
    </p>
  )
}

// <AdmonitionText />

type AdmonitionTextProps = HTMLAttributes<HTMLParagraphElement>

function AdmonitionTextEl(
  props: PropsWithChildren<AdmonitionTextProps>,
  ref: ForwardedRef<HTMLParagraphElement>,
) {
  const { children, ...nativeProps } = props
  const styles = admonition()

  return (
    <small
      {...nativeProps}
      className={cx(nativeProps.className, styles.description)}
      ref={ref}
    >
      {children}
    </small>
  )
}

// public exports

export const Admonition = forwardRef<HTMLDivElement, AdmonitionProps>(
  AdmonitionEl,
)

export const AdmonitionHeading = forwardRef<
  HTMLParagraphElement,
  AdmonitionHeadingProps
>(AdmonitionHeadingEl)

export const AdmonitionText = forwardRef<
  HTMLParagraphElement,
  AdmonitionTextProps
>(AdmonitionTextEl)
