import React from 'react'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function IconButtonUsageEl(props) {
  const { onClick, ...btnOptions } = props
  const { button, iconOptions } = getIconButtonProps(btnOptions)

  return (
    <button {...button} onClick={onClick}>
      <MenuIcon {...getIconProps(iconOptions)} />
    </button>
  )
}

function IconButtonUsage() {
  return (
    <Container>
      <IconButtonUsageEl arialLabel="Action icon button" usage="square" />
      <IconButtonUsageEl ariaLabel="Default icon button" usage="round" />
      <IconButtonUsageEl ariaLabel="Default icon button" usage="text" />
    </Container>
  )
}

export default IconButtonUsage
