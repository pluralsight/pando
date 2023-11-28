import { type PropsWithChildren, type ReactNode } from 'react'

export interface ShowProps {
  fallback?: NonNullable<ReactNode> | null
  when: boolean
}

/**
 * Shows or hides its children based on a condition or alternatively renders a fallback.
 *
 * @param props.when A Boolean expression to determine whether to show the children
 * @param props.fallback An optional fallback to render if the list is empty
 *
 * @example
 * <Show when={signedIn} fallback={<Button>Sign In</Button>>}>
 *   <Button>Sign out</Button>
 * </Show>
 *
 * @see https://design.pluralsight.com/docs/reference/components/show
 */
export function Show(props: PropsWithChildren<ShowProps>) {
  const { children } = props

  if (!children) throw new Error('Show requires children to be used.')

  return <>{props.when ? props.children : props.fallback ?? null}</>
}
