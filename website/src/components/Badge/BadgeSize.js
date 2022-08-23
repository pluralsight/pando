import React from 'react'
import Container from '../Container/Container'
import Badge from './Badge'

export default function BadgeSize() {
  return (
    <Container>
      <Badge usage="outline">S (Default)</Badge>
      <Badge usage="outline" size="xs">
        XS
      </Badge>
    </Container>
  )
}
