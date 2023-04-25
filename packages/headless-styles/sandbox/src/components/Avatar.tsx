import React, { type HTMLAttributes, Component, Suspense } from 'react'
import { PersonIcon } from '@pluralsight/icons'
import {
  getAvatarProps,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { AvatarOptions } from '@pluralsight/headless-styles/types'
import { usePreloadedImg } from '@pluralsight/react-utils'
import { data } from '../data/avatarSizes.data'

interface AvatarContainerProps
  extends AvatarOptions,
    HTMLAttributes<HTMLSpanElement> {}

function AvatarContainer(props: AvatarContainerProps) {
  const { size, sentiment, label, src, ...nativeProps } = props
  const avatar = getAvatarProps({
    classNames: splitClassNameProp(props.className),
    label,
    sentiment,
    size,
    src,
  })

  return <span {...avatar.wrapper} {...nativeProps} />
}

function FallbackAvatar(props: AvatarOptions) {
  const avatar = getAvatarProps({
    ...props,
    classNames: splitClassNameProp(props.className),
    sentiment: 'default',
  })
  const { label } = avatar

  return (
    <AvatarContainer sentiment="default" {...props}>
      {label.value ? (
        <span {...label}>{label.value}</span>
      ) : (
        <PersonIcon {...getIconProps(avatar.iconOptions)} />
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

interface ImageProps extends HTMLAttributes<HTMLImageElement>, AvatarOptions {
  imgData: { read: () => HTMLAttributes<HTMLImageElement> }
}

function Image(props: ImageProps) {
  const { imgData, ...avatarProps } = props
  const avatar = getAvatarProps({
    ...avatarProps,
    classNames: splitClassNameProp(props.className),
  })
  const img = imgData.read()

  return (
    <AvatarContainer {...avatarProps}>
      <img {...avatar.image} {...img} />
    </AvatarContainer>
  )
}

function Avatar(props: AvatarOptions) {
  const resource = usePreloadedImg({
    alt: props.label,
    src: props.src,
  })

  // Figure out how to create smoother fallbacks
  // when switching from null to suspense

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
          label={data.results[size].label}
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
