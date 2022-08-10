import React from 'react'
import { getIconProps, getTextLinkProps } from '@pluralsight/headless-styles'
import { ExternalLinkIcon } from '@pluralsight/icons'
import Container from '../Container/Container'
import styles from './BasicTextLink.module.css'

function TextLink(props) {
  const { link, iconOptions } = getTextLinkProps({ href: props.href })

  return (
    <a {...link} className={`${link.className} ${styles.textLink}`}>
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
      <TextLink href="#top">Default</TextLink>
      <TextLink href="https://www.google.com">External link</TextLink>
    </Container>
  )
}

export default BasicTextLink
