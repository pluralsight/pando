import React from 'react'
import { getTextLinkProps, getIconProps } from '@pluralsight/headless-styles'
import { GithubIcon, FigmaIcon } from '@pluralsight/icons'

export default function ViewSourceLink(props) {
  const { href } = props
  const linkProps = getTextLinkProps({ href })
  const iconProps = getIconProps(linkProps.iconOptions)
  const Icon = href.includes('github') ? GithubIcon : FigmaIcon

  return (
    <a {...linkProps.link}>
      <Icon {...iconProps} />
      {props.children}
    </a>
  )
}
