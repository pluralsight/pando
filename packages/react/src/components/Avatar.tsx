'use client'

import {
  Component,
  Suspense,
  forwardRef,
  type HTMLAttributes,
  type PropsWithChildren,
  type ForwardedRef,
} from 'react'
import { PersonIcon } from '@pluralsight/icons'
import { usePreloadedImg } from '@pluralsight/react-utils'
import {
  avatarIconSizeMap,
  createInitials,
  displayInitials,
} from '../helpers/avatar.helpers'
import type { Palettes, Sizes } from './shared/types'
import { Show } from './Show'
import { avatar } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'

export type AvatarPalette = Exclude<
  Palettes,
  'info' | 'success' | 'warning' | 'danger'
>
export type AvatarSize = Sizes

// <AvatarContainer />

export interface AvatarContainerProps extends HTMLAttributes<HTMLSpanElement> {
  palette?: AvatarPalette
  size?: AvatarSize
}

function AvatarContainer(props: AvatarContainerProps) {
  const { size, palette, ...nativeProps } = props
  return (
    <span
      {...nativeProps}
      className={cx(nativeProps.className, avatar({ palette, size }).root)}
    />
  )
}

// <AvatarLabel />

export interface AvatarLabelProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
  palette?: AvatarPalette
  size?: AvatarSize
}

function AvatarLabel(props: AvatarLabelProps) {
  const { label, palette, size, ...nativeProps } = props
  const value = displayInitials(createInitials(label))
  return (
    <span
      {...nativeProps}
      aria-label={label}
      className={cx(nativeProps.className, avatar({ palette, size }).label)}
    >
      {value}
    </span>
  )
}

// <FallbackAvatar />

export type FallbackAvatarProps = AvatarLabelProps

function FallbackAvatar(props: FallbackAvatarProps) {
  const { size = 'md', label, palette, ...nativeProps } = props

  return (
    <AvatarContainer palette={palette} size={size} {...nativeProps}>
      <Show
        when={Boolean(label)}
        fallback={
          <PersonIcon
            aria-hidden
            height={avatarIconSizeMap[size]}
            width={avatarIconSizeMap[size]}
          />
        }
      >
        <AvatarLabel label={label} palette={palette} size={size} />
      </Show>
    </AvatarContainer>
  )
}

// <AvatarErrorBoundary />
export interface AvatarErrorBoundaryState {
  hasError: boolean
}

export type AvatarErrorBoundaryProps = AvatarLabelProps

export class AvatarErrorBoundary extends Component<
  PropsWithChildren<AvatarErrorBoundaryProps>,
  AvatarErrorBoundaryState
> {
  constructor(props: AvatarLabelProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <FallbackAvatar {...this.props} />
    }

    return this.props.children
  }
}

// <Image />

export interface AvatarImageOptions {
  alt: string
  src: string
}

export interface ImageProps
  extends HTMLAttributes<HTMLImageElement>,
    AvatarImageOptions {
  imgData: { read: () => HTMLAttributes<HTMLImageElement> }
  label: AvatarLabelProps['label']
  ref?: ForwardedRef<HTMLImageElement>
}

function ImageEl(props: ImageProps, ref: ForwardedRef<HTMLImageElement>) {
  const { imgData, label, src, ...nativeProps } = props
  const img = imgData.read()

  return (
    <AvatarContainer {...nativeProps}>
      <img alt={label} src={src} ref={ref} {...img} />
    </AvatarContainer>
  )
}

const Image = forwardRef<HTMLImageElement, ImageProps>(ImageEl)

// <Avatar />

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  label?: AvatarLabelProps['label']
  palette?: AvatarPalette
  size?: AvatarSize
  src?: AvatarImageOptions['src']
}

function AvatarEl(props: AvatarProps, ref: ForwardedRef<HTMLImageElement>) {
  const { label, src, ...altProps } = props
  const resource = usePreloadedImg({
    alt: label,
    src,
  })

  if (!resource) {
    return <FallbackAvatar label={label ?? ''} {...altProps} />
  }

  return (
    <AvatarErrorBoundary label={label ?? ''} {...altProps}>
      <Suspense fallback={<FallbackAvatar label={label ?? ''} {...altProps} />}>
        <Image
          alt={label ?? ''}
          imgData={resource.img as ImageProps['imgData']}
          label={label ?? ''}
          ref={ref}
          src={src ?? ''}
          {...altProps}
        />
      </Suspense>
    </AvatarErrorBoundary>
  )
}

// public exports

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(AvatarEl)
