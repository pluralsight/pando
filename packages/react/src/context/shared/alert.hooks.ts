import { useId, useMemo } from 'react'
import { initialAlertOptions } from './alert.actions'
import type { AlertOptions } from './alert.types'

export interface InitialAlertOptions extends AlertOptions {
  bodyId: string
  headingId: string
}

export function useInitialAlertOptions(
  options: AlertOptions = initialAlertOptions,
): InitialAlertOptions {
  const headingId = useId()
  const bodyId = useId()

  return useMemo(
    () => ({
      ...options,
      bodyId: options?.bodyId ?? bodyId,
      headingId: options?.headingId ?? headingId,
    }),
    [options, headingId, bodyId],
  )
}
