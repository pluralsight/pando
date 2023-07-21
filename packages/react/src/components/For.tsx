import { useMemo, type ReactNode } from 'react'

export interface ForProps<T, U extends JSX.Element> {
  each: readonly T[]
  fallback?: NonNullable<ReactNode> | null
  children: (item: T, index: number) => U
}

export function For<T, U extends JSX.Element>(props: ForProps<T, U>) {
  const { each, fallback, children } = props

  return useMemo(() => {
    if (each.length) {
      return each.map(children)
    }

    return fallback ?? null
  }, [each, fallback, children]) as unknown as U
}
