import React from 'react'
import { getIconProps, getButtonProps } from '@pluralsight/headless-styles'
import { PlaceholderIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const { button, iconOptions } = getButtonProps()
const iconProps = getIconProps(iconOptions)

function IconColor() {
  return (
    <Container>
      <button {...button}>
        <PlaceholderIcon {...iconProps} />
        Icon matches font color
      </button>
    </Container>
  )
}

export default IconColor
