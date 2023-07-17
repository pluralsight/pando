import React from 'react'
import { TextLink } from '@pluralsight/react'
import { getIconProps } from '@pluralsight/headless-styles'
import { GithubIcon, FigmaIcon } from '@pluralsight/icons'

export default function ViewSourceLink(props) {
  const { href } = props
  const iconProps = getIconProps({
    ariaHidden: true,
    size: 's',
  })
  const Icon = href.includes('github') ? GithubIcon : FigmaIcon

  return (
    <TextLink {...props}>
      <Icon {...iconProps} />
      {props.children}
    </TextLink>
  )
}
