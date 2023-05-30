import { type PropsWithChildren, type ReactNode } from 'react'

interface ShowProps {
  fallback: NonNullable<ReactNode> | null
  when: boolean
}

export function Show(props: PropsWithChildren<ShowProps>) {
  const { children } = props

  if (!children) throw new Error('Show requires children to be used.')

  return <>{props.when ? props.children : props.fallback}</>
}
