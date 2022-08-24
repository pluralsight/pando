import React from 'react'
import { getAvatarProps, getIconProps } from '@pluralsight/headless-styles'
import { PersonIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function IconAvatar(props) {
  const avatar = getAvatarProps({
    label: props.label,
    sentiment: props.sentiment,
    size: props.size,
  })

  return (
    <span {...avatar.wrapper}>
      <PersonIcon {...getIconProps(avatar.iconOptions)} />
    </span>
  )
}

function Avatar(props) {
  const avatar = getAvatarProps({
    label: props.label,
    sentiment: props.sentiment,
    size: props.size,
  })

  return (
    <span {...avatar.wrapper}>
      <span {...avatar.label}>{avatar.label.value}</span>
    </span>
  )
}

function BasicAvatar() {
  return (
    <Container>
      <Avatar sentiment="default" label="default avatar" />
      <IconAvatar sentiment="default" label="default icon avatar" />
      <Avatar sentiment="action" label="action avatar" />
      <IconAvatar sentiment="action" label="action icon avatar" />
    </Container>
  )
}

export default BasicAvatar
