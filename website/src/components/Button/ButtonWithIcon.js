import React from 'react'
import { getButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { DownloadIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function Button(props) {
  const { children, ...btnProps } = props
  const { button, iconOptions } = getButtonProps(btnProps)
  const iconProps = getIconProps(iconOptions)

  return (
    <button {...button}>
      {btnProps.icon === 'start' && <DownloadIcon {...iconProps} />}
      {children}
      {btnProps.icon === 'end' && <DownloadIcon {...iconProps} />}
    </button>
  )
}

function ButtonWithIcon() {
  return (
    <Container>
      <Button icon="start">Icon at start</Button>
      <Button icon="end">Icon at end</Button>
    </Container>
  )
}

export default ButtonWithIcon
