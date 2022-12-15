import React from 'react'
import Container from '../Container/Container'
import { getProgressProps } from '@pluralsight/headless-styles'

const xsProgress = getProgressProps({
  ariaLabel: 'extra small (xs) progress example',
  size: 'xs',
  now: 50,
})
const insetProgress = getProgressProps({
  ariaLabel: 'small (s) progress example',
  now: 60,
})

export default function ProgressSizes() {
  return (
    <Container type="column">
      <div {...xsProgress.wrapper} style={{ marginBottom: '1rem' }}>
        <div {...xsProgress.bar} />
      </div>
      <div {...insetProgress.wrapper}>
        <div {...insetProgress.bar} />
      </div>
    </Container>
  )
}
