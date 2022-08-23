import React from 'react'
import Container from '../Container/Container'
import { PlaceholderIcon } from '@pluralsight/icons'
import Badge from './Badge'

export default function BadgeIcon() {
  return (
    <Container>
      <Badge icon={PlaceholderIcon}>Default</Badge>
      <Badge icon={PlaceholderIcon} sentiment="action">
        Action
      </Badge>
      <Badge icon={PlaceholderIcon} usage="outline">
        Outline
      </Badge>
    </Container>
  )
}
