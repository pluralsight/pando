import React from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const psOutlineButtonProps = getButtonProps({ usage: 'outline' }).button
const psTextButtonProps = getButtonProps({ usage: 'text' }).button

function ButtonUsage() {
  return (
    <Container>
      <button {...psOutlineButtonProps}>outline</button>
      <button {...psTextButtonProps}>text</button>
    </Container>
  )
}

export default ButtonUsage
