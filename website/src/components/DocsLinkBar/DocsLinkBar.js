import React from 'react'
import { getGridProps, getGridItemProps } from '@pluralsight/headless-styles'
import ViewSourceLink from '../ViewSourceLink/ViewSourceLink'
import styles from './DocsLinkBar.module.css'

export function DocsLinkItem(props) {
  return (
    <li {...getGridItemProps({ colSpan: 3 })}>
      <ViewSourceLink {...props}>{props.children}</ViewSourceLink>
    </li>
  )
}

export function DocsGithubLink(props) {
  return (
    <DocsLinkItem href={props.href}>
      {props.children ?? 'View on Github'}
    </DocsLinkItem>
  )
}

export function DocsFigmaLink(props) {
  return <DocsLinkItem href={props.href}>View on Figma</DocsLinkItem>
}

export function DocsLinkList(props) {
  const { className, ...gridProps } = getGridProps({ cols: 12, gap: 8 })
  return (
    <ul className={`${className} ${styles.grid}`} {...gridProps}>
      {props.children}
    </ul>
  )
}

export default function DocsLinkBar(props) {
  const { figma, github } = props
  const { className, ...gridProps } = getGridProps({ cols: 12, gap: 8 })

  return (
    <ul className={`${className} ${styles.grid}`} {...gridProps}>
      {github && <DocsGithubLink href={github} />}
      {figma && <DocsFigmaLink href={figma} />}
    </ul>
  )
}
