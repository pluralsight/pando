import React from 'react'
import Container from '../Container/Container'
import Badge from './Badge'

export default function BasicBadge() {
  return (
    <Container>
      <Badge>Default</Badge>
      <Badge sentiment="action">Action</Badge>
    </Container>
  )
}
