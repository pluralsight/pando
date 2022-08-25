import React from 'react'
import Admonition from './Admonition'
import Container from '../Container/Container'

function CloseAdmonition() {
  return (
    <Container>
      <Admonition
        admonitionTitle="Info admonition"
        description="This is an example of an informational admonition."
        showButton
      />
    </Container>
  )
}

export default CloseAdmonition
