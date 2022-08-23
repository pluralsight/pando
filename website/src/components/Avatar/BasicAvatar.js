import React from 'react'
import { getAvatarProps, getIconProps } from '@pluralsight/headless-styles'
import { PersonIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function IconAvatar(props) {
  const { wrapper, iconOptions } = getAvatarProps({
    label: props.label,
    sentiment: props.sentiment,
    size: props.size,
  })

  return (
    <span {...wrapper}>
      <PersonIcon {...getIconProps(iconOptions)} />
    </span>
  )
}

function Avatar(props) {
  const { wrapper, label } = getAvatarProps({
    label: props.label,
    sentiment: props.sentiment,
    size: props.size,
  })

  return (
    <span {...wrapper}>
      <span {...label}>{props.children}</span>
    </span>
  )
}

function BasicAvatar() {
  return (
    <Container>
      <Avatar sentiment="default" label="default avatar">
        NA
      </Avatar>
      <IconAvatar sentiment="default" label="default icon avatar" />
      <Avatar sentiment="action" label="action avatar">
        SA
      </Avatar>
      <IconAvatar sentiment="action" label="action icon avatar" />
    </Container>
  )
}

export default BasicAvatar
