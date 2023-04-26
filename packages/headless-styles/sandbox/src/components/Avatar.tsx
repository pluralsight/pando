import React, { type HTMLAttributes, Component, Suspense } from 'react'
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
import { data } from '../data/avatarSizes.data'

interface AvatarContainerProps
  extends AvatarOptions,
    HTMLAttributes<HTMLSpanElement> {}

function AvatarContainer(props: AvatarContainerProps) {
  const { size, sentiment, ...nativeProps } = props
  const avatar = getAvatarProps({
    classNames: splitClassNameProp(props.className),
    sentiment,
    size,
  })

  return <span {...avatar.wrapper} {...nativeProps} />
}

function AvatarLabel(props: AvatarLabelOptions) {
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

function FallbackAvatar(props: AvatarOptions) {
  const { size, sentiment = 'default', name, ...nativeProps } = props

  return (
    <AvatarContainer sentiment={sentiment} size={size} {...nativeProps}>
      {props.name ? (
        <AvatarLabel name={name} {...props} />
      ) : (
        <PersonIcon {...getIconProps(getAvatarIconOptions(size))} />
      )}
    </AvatarContainer>
  )
}

interface AvatarErrorBoundaryState {
  hasError: boolean
}

class AvatarErrorBoundary extends Component<
  AvatarOptions,
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
}

function Image(props: ImageProps) {
  const { imgData, name, src, ...nativeProps } = props
  const avatarImg = getAvatarImageProps({
    alt: name,
    classNames: splitClassNameProp(props.className),
    src,
  })
  const img = imgData.read()

  return (
    <AvatarContainer {...nativeProps}>
      <img {...avatarImg} {...img} />
    </AvatarContainer>
  )
}

interface AvatarProps
  extends AvatarOptions,
    AvatarImageOptions,
    AvatarLabelOptions {}

function Avatar(props: AvatarProps) {
  const resource = usePreloadedImg({
    alt: props.name,
    src: props.src,
  })

  if (!resource) {
    return <FallbackAvatar {...props} />
  }

  return (
    <AvatarErrorBoundary {...props}>
      <Suspense fallback={<FallbackAvatar {...props} />}>
        <Image imgData={resource.img} {...props} />
      </Suspense>
    </AvatarErrorBoundary>
  )
}

function AvatarList() {
  return (
    <>
      {data.items.map((size: AvatarOptions['size']) => (
        <Avatar key={size} {...data.results[size]} />
      ))}
    </>
  )
}

function AvatarInitialList() {
  return (
    <>
      {data.items.map((size: AvatarOptions['size']) => (
        <Avatar
          key={size}
          name={data.results[size].name}
          size={data.results[size].size}
        />
      ))}
    </>
  )
}

function AvatarIconList() {
  return (
    <>
      {data.items.map((size: AvatarOptions['size']) => (
        <Avatar key={size} size={data.results[size].size} />
      ))}
    </>
  )
}

export default function AvatarPage() {
  return (
    <div id="avatar">
      <h3>Avatar</h3>

      <div className="App-container">
        <AvatarList />
      </div>

      <div className="App-container">
        <AvatarInitialList />
      </div>

      <div className="App-container">
        <AvatarIconList />
      </div>
    </div>
  )
}
