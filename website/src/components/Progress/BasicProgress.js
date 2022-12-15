import React from 'react'
import Container from '../Container/Container'
import { getProgressProps } from '@pluralsight/headless-styles'

const progress = getProgressProps({
  ariaLabel: 'default basic progress example',
  now: 50,
})
const insetProgress = getProgressProps({
  ariaLabel: 'inset basic progress example',
  kind: 'inset',
  now: 60,
})

export default function BasicProgress() {
  return (
    <Container type="column">
      <div {...progress.wrapper} style={{ marginBottom: '1rem' }}>
        <div {...progress.bar} />
      </div>
      <div {...insetProgress.wrapper}>
        <div {...insetProgress.bar} />
      </div>
    </Container>
  )
}
