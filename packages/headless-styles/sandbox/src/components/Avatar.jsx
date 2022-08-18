import { useEffect } from 'react'
import { PersonIcon } from '@pluralsight/icons'
import { getAvatarProps, getJSAvatarProps, getIconProps } from '../../../src'
// import { weirdAl } from './Avatar.image'

// const profileImage = <img src={weirdAl} />

// function matchAvatarEl(props) {
//   if (props.href) {
//     return 'a'
//   } else if (props.onClick) {
//     return 'button'
//   }

//   return 'span'
// }

// function getAvatarLabel(props, imageProps, iconOptions) {
//   if (props.image) {
//     return cloneElement(props.image, imageProps)
//   } else if (props.firstName || props.lastName) {
//     return [props.firstName?.charAt(0), props.lastName?.charAt(0)].join(' ')
//   }

//   return <PersonIcon {...getIconProps(iconOptions)} />
// }

function MatchAvatarContent(props) {
  if (props.image.src) {
    return <AvatarImg {...props.image} />
  } else if (props.label['aria-label']) {
    return <AvatarLabel {...props.label} size={props.size} />
  } else {
    return <PersonIcon {...getIconProps(props.iconOptions)} />
  }
}

function AvatarImg(props) {
  // usePreloadedImg here
  return <img {...props} />
}

function AvatarLabel(props) {
  const { value, ...labelProps } = props
  return <div {...labelProps}>{value}</div>
}

function AvatarEl(props) {
  const { wrapper, ...avatarProps } = getAvatarProps(props)

  return (
    <span {...wrapper}>
      <MatchAvatarContent {...avatarProps} size={props.size} />
    </span>
  )
}

const sizes = ['xs', 's', 'm', 'l', 'xl']

function AvatarSizes(props) {
  return sizes.map((size) => (
    <AvatarEl {...props} key={size} size={size} label={size} />
  ))
}

function Link(props) {
  return (
    <a
      href={props.href}
      style={{
        textDecoration: 'none',
      }}
    >
      {props.children}
    </a>
  )
}

export default function Avatar({ logJS }) {
  function handleClick() {
    console.log('Avatar clicked')
  }

  useEffect(() => {
    if (logJS) {
      console.log(
        getJSAvatarProps({
          label: 'JS API',
          sentiment: 'action',
          size: 'xl',
        })
      )
    }
  }, [logJS])

  return (
    <div id="avatar">
      <h3>Avatar</h3>
      <div className="App-container">
        <AvatarEl label="default" />
        <AvatarEl sentiment="default" label="default sentiment" />
        <AvatarEl sentiment="action" label="action" />
        <AvatarEl sentiment="action" label="action sentiment" />
      </div>

      <div className="App-container">
        <AvatarEl sentiment="default" />
        <AvatarEl sentiment="action" />
      </div>

      <div className="App-container">
        <Link href="#">
          <AvatarEl />
        </Link>
        <Link href="#">
          <AvatarEl sentiment="default" label="default sentiment" />
        </Link>
        <Link href="#">
          <AvatarEl sentiment="action" />
        </Link>
        <Link href="#">
          <AvatarEl sentiment="action" label="action sentiment" />
        </Link>
      </div>

      <div className="App-container">
        <AvatarSizes onClick={handleClick} />
      </div>

      <div className="App-container">
        <AvatarSizes
          src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
