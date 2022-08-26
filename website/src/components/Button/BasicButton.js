import React from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const psButtonProps = getButtonProps().button
const psDefaultButtonProps = getButtonProps({ sentiment: 'default' }).button
const psDangerButtonProps = getButtonProps({ sentiment: 'danger' }).button

function BasicButton() {
  return (
    <Container>
      <button {...psButtonProps}>action</button>
      <button {...psDefaultButtonProps}>default</button>
      <button {...psDangerButtonProps}>danger</button>
    </Container>
  )
}

export default BasicButton
