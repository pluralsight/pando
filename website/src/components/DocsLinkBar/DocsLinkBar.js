import React from 'react'
import ViewSourceLink from '../ViewSourceLink/ViewSourceLink'
import styles from './DocsLinkBar.module.css'

export function DocsLinkItem(props) {
  return (
    <li className={styles.linkItem}>
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
  return <ul className={styles.linkList}>{props.children}</ul>
}

export default function DocsLinkBar(props) {
  const { figma, github } = props
  return (
    <ul className={styles.linkList}>
      {github && <DocsGithubLink href={github} />}
      {figma && <DocsFigmaLink href={figma} />}
    </ul>
  )
}
