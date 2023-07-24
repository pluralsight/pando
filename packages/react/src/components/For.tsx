import { useMemo, type ReactNode } from 'react'

export interface ForProps<T, U extends JSX.Element> {
  each: readonly T[]
  fallback?: NonNullable<ReactNode> | null
  children: (item: T, index: number) => U
}

/**
 * Creates ann array of elements from a list
 *
 * @param props.each - The list to iterate over
 * @param props.fallback - An optional fallback to render if the list is empty
 *
 * @returns a map callback as its child; if the list is empty, the optional fallback is returned.
 *
 * @example
 * <For each={items} fallback={<div>No items</div>}>
 *   {(item, index) => <div key={index}>{item}</div>}
 * </For>
 *
 * @description https://design.pluralsight.com/docs/reference/components/for
 */
export function For<T, U extends JSX.Element>(props: ForProps<T, U>) {
  const { each, fallback, children } = props

  return useMemo(() => {
    if (each.length) {
      return each.map(children)
    }

    return fallback ?? null
  }, [each, fallback, children]) as unknown as U
}
