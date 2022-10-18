import React from 'react'
import Admonition from './Admonition'
import Container from '../Container/Container'

function StatusAdmonition() {
  return (
    <Container type="column">
      <Admonition
        admonitionTitle="Info admonition"
        description="This is an example of an informational admonition."
      />
      <br />
      <Admonition
        admonitionTitle="Success admonition"
        sentiment="success"
        description="This is an example of an success admonition."
      />
      <br />
      <Admonition
        admonitionTitle="Warning admonition"
        sentiment="warning"
        description="This is an example of an warning admonition."
      />
      <br />
      <Admonition
        admonitionTitle="Danger admonition"
        sentiment="danger"
        description="This is an example of an danger admonition."
      />
    </Container>
  )
}

export default StatusAdmonition
