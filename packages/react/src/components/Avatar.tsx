import {
  Component,
  Suspense,
  forwardRef,
  type HTMLAttributes,
  type PropsWithChildren,
  type ForwardedRef,
} from 'react'
import { PersonIcon } from '@pluralsight/icons'
import {
  getAvatarProps,
  getAvatarImageProps,
  getAvatarLabelProps,
  getAvatarIconOptions,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type {
  AvatarOptions,
  AvatarImageOptions,
  AvatarLabelOptions,
} from '@pluralsight/headless-styles/types'
import { usePreloadedImg } from '@pluralsight/react-utils'

interface AvatarContainerProps
  extends AvatarOptions,
    HTMLAttributes<HTMLSpanElement> {}

function AvatarContainer(props: AvatarContainerProps) {
  const { size, sentiment, ...nativeProps } = props
  const container = getAvatarProps({
    classNames: splitClassNameProp(props.className),
    sentiment,
    size,
  })

  return <span {...container} {...nativeProps} />
}

interface AvatarLabelProps
  extends AvatarLabelOptions,
    HTMLAttributes<HTMLSpanElement> {}

function AvatarLabel(props: AvatarLabelProps) {
  const { name, size, ...nativeProps } = props
  const { value, ...label } = getAvatarLabelProps({
    classNames: splitClassNameProp(props.className),
    name,
    size,
  })
  return (
    <span {...label} {...nativeProps}>
      {value}
    </span>
  )
}

interface FallbackAvatarProps extends AvatarOptions {
  name?: AvatarLabelProps['name']
}

function FallbackAvatar(props: FallbackAvatarProps) {
  const { size = 'm', sentiment = 'default', name, ...nativeProps } = props

  return (
    <AvatarContainer sentiment={sentiment} size={size} {...nativeProps}>
      {name ? (
        <AvatarLabel {...props} name={name} size={size} />
      ) : (
        <PersonIcon {...getIconProps(getAvatarIconOptions(size))} />
      )}
    </AvatarContainer>
  )
}

interface AvatarErrorBoundaryState {
  hasError: boolean
}

interface AvatarErrorBoundaryProps extends AvatarOptions {
  name?: AvatarLabelProps['name']
}

class AvatarErrorBoundary extends Component<
  PropsWithChildren<AvatarErrorBoundaryProps>,
  AvatarErrorBoundaryState
> {
  constructor(props: AvatarOptions) {
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

interface ImageProps
  extends HTMLAttributes<HTMLImageElement>,
    AvatarImageOptions {
  imgData: { read: () => HTMLAttributes<HTMLImageElement> }
  name: AvatarLabelOptions['name']
  ref?: ForwardedRef<HTMLImageElement>
}

function ImageEl(props: ImageProps, ref: ForwardedRef<HTMLImageElement>) {
  const { imgData, name, src, ...nativeProps } = props
  const avatarImg = getAvatarImageProps({
    alt: name,
    classNames: splitClassNameProp(props.className),
    src,
  })
  const img = imgData.read()

  return (
    <AvatarContainer {...nativeProps}>
      <img
        {...avatarImg}
        alt={avatarImg.alt}
        src={avatarImg.src}
        ref={ref}
        {...img}
      />
    </AvatarContainer>
  )
}

const Image = forwardRef<HTMLImageElement, ImageProps>(ImageEl)

// <Avatar />

interface AvatarProps extends AvatarOptions {
  name?: AvatarLabelOptions['name']
  src?: AvatarImageOptions['src']
}

function AvatarEl(props: AvatarProps, ref: ForwardedRef<HTMLImageElement>) {
  const { name, src, ...altProps } = props
  const resource = usePreloadedImg({
    alt: name,
    src,
  })

  if (!resource) {
    return <FallbackAvatar name={name} {...altProps} />
  }

  return (
    <AvatarErrorBoundary name={name} {...altProps}>
      <Suspense fallback={<FallbackAvatar {...altProps} />}>
        <Image
          alt={name ?? ''}
          imgData={resource.img as ImageProps['imgData']}
          name={name ?? ''}
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
