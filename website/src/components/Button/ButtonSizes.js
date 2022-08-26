import React from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const psMButtonProps = getButtonProps({ size: 'm' }).button
const psLButtonProps = getButtonProps().button

function ButtonSizes() {
  return (
    <Container>
      <button {...psMButtonProps}>medium</button>
      <button {...psLButtonProps}>large</button>
    </Container>
  )
}

export default ButtonSizes
