import React from 'react'
import Container from '../Container/Container'
import { getProgressProps } from '@pluralsight/headless-styles'

const inset = getProgressProps({
  ariaLabel: 'inset progress example',
  kind: 'inset',
  now: 60,
})

export default function InsetProgress() {
  return (
    <Container type="column">
      <div {...inset.wrapper}>
        <div {...inset.bar} />
      </div>
    </Container>
  )
}
