import React from 'react'
import Admonition from './Admonition'
import Container from '../Container/Container'

function BasicAdmonition() {
  return (
    <Container>
      <Admonition
        admonitionTitle="Info admonition"
        description="This is an example of an informational admonition."
      />
    </Container>
  )
}

export default BasicAdmonition
