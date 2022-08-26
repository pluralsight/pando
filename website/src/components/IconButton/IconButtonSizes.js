import React from 'react'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { PlaceholderIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function IconButton(props) {
  const { icon, ...btnOptions } = props
  const { button, iconOptions } = getIconButtonProps(btnOptions)
  const Icon = icon

  return (
    <button {...button}>
      <Icon {...getIconProps(iconOptions)} />
    </button>
  )
}

function IconButtonSizes() {
  return (
    <Container>
      <IconButton
        ariaLabel="medium icon button"
        icon={PlaceholderIcon}
        size="m"
      />
      <IconButton
        ariaLabel="medium icon button"
        icon={PlaceholderIcon}
        size="m"
        usage="round"
      />
      <IconButton
        ariaLabel="medium icon button"
        icon={PlaceholderIcon}
        size="m"
        usage="text"
      />
      <IconButton
        ariaLabel="large icon button"
        icon={PlaceholderIcon}
        size="l"
      />
      <IconButton
        ariaLabel="large icon button"
        icon={PlaceholderIcon}
        size="l"
        usage="round"
      />
      <IconButton
        ariaLabel="large icon button"
        icon={PlaceholderIcon}
        size="l"
        usage="text"
      />
    </Container>
  )
}

export default IconButtonSizes
