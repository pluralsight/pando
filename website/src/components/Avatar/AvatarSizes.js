import React from 'react'
import { getAvatarProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function Avatar(props) {
  const { wrapper, label } = getAvatarProps({
    label: props.label,
    sentiment: 'default',
    size: props.size,
  })

  return (
    <span {...wrapper}>
      <span {...label}>{props.size}</span>
    </span>
  )
}

function AvatarSizes() {
  return (
    <Container>
      <Avatar size="xs" />
      <Avatar size="s" />
      <Avatar size="m" />
      <Avatar size="l" />
      <Avatar size="xl" />
    </Container>
  )
}

export default AvatarSizes
