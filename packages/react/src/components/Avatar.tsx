'use client'

import {
  Suspense,
  forwardRef,
  useState,
  type HTMLAttributes,
  type ForwardedRef,
  type ReactNode,
} from 'react'
import { PersonIcon } from '@pluralsight/icons'
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
  const { size = 'md', label, palette } = props

  return (
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
  )
}

// <Image />

export interface AvatarImageOptions {
  alt: string
  src: string
}

export interface ImageProps
  extends HTMLAttributes<HTMLImageElement>,
    AvatarImageOptions {
  label: AvatarLabelProps['label']
  ref?: ForwardedRef<HTMLImageElement>
}

function ImageEl(props: ImageProps, ref: ForwardedRef<HTMLImageElement>) {
  const { label, src, ...nativeProps } = props
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const styles = avatar().image

  function handleLoad() {
    setIsImgLoaded(true)
  }

  function handleError() {
    setHasError(true)
  }

  return (
    <Show
      when={hasError}
      fallback={
        <img
          {...nativeProps}
          aria-busy={!isImgLoaded}
          alt={nativeProps.alt ?? label ?? 'avatar'}
          className={cx(nativeProps.className, styles)}
          decoding="async"
          loading="lazy"
          onError={handleError}
          onLoad={handleLoad}
          src={src}
          ref={ref}
        />
      }
    >
      <FallbackAvatar label={label} />
    </Show>
  )
}

const Image = forwardRef<HTMLImageElement, ImageProps>(ImageEl)

// <Avatar />

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  img?: ReactNode
  label: AvatarLabelProps['label']
  palette?: AvatarPalette
  size?: AvatarSize
  src?: AvatarImageOptions['src']
}

function AvatarEl(props: AvatarProps, ref: ForwardedRef<HTMLImageElement>) {
  const { label, src, img, palette, size, ...nativeProps } = props

  return (
    <AvatarContainer palette={palette} size={size}>
      <Suspense
        fallback={
          <FallbackAvatar
            size={size}
            palette={palette}
            label={label ?? ''}
            {...nativeProps}
          />
        }
      >
        <Show
          when={Boolean(img)}
          fallback={
            <Show
              when={Boolean(src)}
              fallback={
                <FallbackAvatar
                  size={size}
                  palette={palette}
                  label={label ?? ''}
                  {...nativeProps}
                />
              }
            >
              <Image
                alt={label ?? ''}
                label={label ?? ''}
                ref={ref}
                src={src ?? ''}
                {...nativeProps}
              />
            </Show>
          }
        >
          <>{img ?? null}</>
        </Show>
      </Suspense>
    </AvatarContainer>
  )
}

// public exports

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(AvatarEl)
