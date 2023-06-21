import { useId, useMemo } from 'react'
import { initialAlertOptions } from './alert.actions.ts'
import type { AlertOptions } from './alert.types.ts'

export function useInitialAlertOptions(
  options: AlertOptions = initialAlertOptions
) {
  const headingId = useId()
  const bodyId = useId()

  return useMemo(
    () => ({
      ...options,
      bodyId: options?.bodyId ?? bodyId,
      headingId: options?.headingId ?? headingId,
    }),
    [options, headingId, bodyId]
  )
}
