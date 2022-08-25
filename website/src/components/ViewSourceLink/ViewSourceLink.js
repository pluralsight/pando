import React from 'react'
import { getTextLinkProps, getIconProps } from '@pluralsight/headless-styles'
import { GithubIcon, NpmIcon } from '@pluralsight/icons'

export default function ViewSourceLink(props) {
  const { href } = props
  const linkProps = getTextLinkProps({ href })
  const iconProps = getIconProps(linkProps.iconOptions)
  const Icon = href.includes('github') ? GithubIcon : NpmIcon

  return (
    <a {...linkProps.link}>
      <Icon {...iconProps} />
      {props.children}
    </a>
  )
}
