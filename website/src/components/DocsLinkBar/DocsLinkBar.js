import React from 'react'
import { getGridProps, getGridItemProps } from '@pluralsight/headless-styles'
import ViewSourceLink from '../ViewSourceLink/ViewSourceLink'
import styles from './DocsLinkBar.module.css'

function DocsLinkItem(props) {
  return (
    <li {...getGridItemProps({ colSpan: 2 })}>
      <ViewSourceLink {...props}>{props.children}</ViewSourceLink>
    </li>
  )
}

export default function DocsLinkBar(props) {
  const { figma, github } = props
  const { className, ...gridProps } = getGridProps({ cols: 12, gap: 8 })

  return (
    <ul className={`${className} ${styles.grid}`} {...gridProps}>
      {github && <DocsLinkItem href={github}>View on Github</DocsLinkItem>}
      {figma && <DocsLinkItem href={figma}>Figma Design</DocsLinkItem>}
    </ul>
  )
}
