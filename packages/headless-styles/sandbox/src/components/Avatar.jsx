import { Suspense } from 'react'
import { PersonIcon } from '@pluralsight/icons'
import {
  getAvatarProps,
  getIconProps,
  getSkeletonProps,
} from '@pluralsight/headless-styles'
import { usePreloadedImg } from '@pluralsight/react-utils'

function MatchAvatarContent(props) {
  if (props.image.src) {
    return <PreloadedAvatar {...props.image} />
  } else if (props.label['aria-label']) {
    return <AvatarLabel {...props.label} size={props.size} />
  } else {
    return <PersonIcon {...getIconProps(props.iconOptions)} />
  }
}

function AvatarImg(props) {
  const img = props.imgData.read()
  return (
    <a href={img.src} rel="noreferrer" target="_blank">
      <img {...img} />
    </a>
  )
}

function Fallback() {
  return <div {...getSkeletonProps({ kind: 'circle' })} />
}

function PreloadedAvatar(props) {
  const resource = usePreloadedImg({
    alt: props.alt ?? 'random image',
    src: props.src,
  })

  return (
    <div className="App-container">
      {resource && (
        <Suspense fallback={<Fallback />}>
          <AvatarImg imgData={resource.img} />
        </Suspense>
      )}
      {!resource && null}
    </div>
  )
}

function AvatarLabel(props) {
  const { value, ...labelProps } = props
  return <div {...labelProps}>{value}</div>
}

function AvatarWrapper(props) {
  const { children, wrapper } = props

  if (props.sentiment === 'action') {
    return <button {...wrapper}>{children}</button>
  }

  return <span {...wrapper}>{children}</span>
}

function AvatarEl(props) {
  const { wrapper, ...avatarProps } = getAvatarProps(props)

  return (
    <AvatarWrapper sentiment={props.sentiment} wrapper={wrapper}>
      <MatchAvatarContent {...avatarProps} size={props.size} />
    </AvatarWrapper>
  )
}

const sizes = ['xs', 's', 'm', 'l', 'xl']
const label = {
  xs: 'xtra small',
  s: 'small',
  m: 'medium',
  l: 'large',
  xl: 'xtra large',
}

function AvatarSizes(props) {
  return sizes.map((size) => (
    <AvatarEl {...props} key={size} size={size} label={label[size]} />
  ))
}

function AvatarIconSizes() {
  return sizes.map((size) => <AvatarEl key={size} size={size} />)
}

export default function Avatar() {
  return (
    <div id="avatar">
      <h3>Avatar</h3>

      <div className="App-container">
        <AvatarSizes src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </div>

      <div className="App-container">
        <AvatarSizes />
      </div>

      <div className="App-container">
        <AvatarIconSizes />
      </div>

      <div className="App-container">
        <AvatarSizes sentiment="action" />
      </div>
    </div>
  )
}
