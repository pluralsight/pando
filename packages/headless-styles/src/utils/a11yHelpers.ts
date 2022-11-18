import { warning } from '@pluralsight/shared'

export function getAccessibleLabelProps(labelId?: string, ariaLabel?: string) {
  warning(
    !(labelId || ariaLabel),
    'Accessible label missing. Reference ID or label string are required.'
  )

  if (labelId) {
    return {
      'aria-labelledby': labelId,
    }
  }

  return {
    'aria-label': ariaLabel,
  }
}
