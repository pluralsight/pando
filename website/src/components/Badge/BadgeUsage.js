import React from 'react'
import Container from '../Container/Container'
import Badge from './Badge'

export default function BadgeUsage() {
  return (
    <Container>
      <Badge>Filled (Default)</Badge>
      <Badge usage="outline">Outline</Badge>
    </Container>
  )
}
