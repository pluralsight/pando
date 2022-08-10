import React from 'react'
import { getIconProps, getTextLinkProps } from '@pluralsight/headless-styles'
import { ExternalLinkIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function TextLink(props) {
  const { link, iconOptions } = getTextLinkProps({ href: props.href })

  return (
    <a {...link}>
      {props.children}
      {link.rel?.includes('external') && (
        <ExternalLinkIcon {...getIconProps(iconOptions)} />
      )}
    </a>
  )
}

function BasicTextLink() {
  return (
    <Container>
      <style>
        {`
          .ps-text-link:hover {
            color: var(--ps-info-text-medium);
          }
          .ps-text-link:visited:hover {
            color: var(--ps-text-medium);
          }
        `}
      </style>

      <TextLink href="#top">Default</TextLink>
      <TextLink href="https://www.google.com">External link</TextLink>
    </Container>
  )
}

export default BasicTextLink
