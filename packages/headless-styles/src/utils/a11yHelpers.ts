import { warning } from '@pluralsight/shared'

export function getAccessibleLabelProps(
  headingId?: string,
  ariaLabel?: string
) {
  warning(
    !(headingId || ariaLabel),
    'Accessible label missing. Heading ID or aria label required.'
  )

  if (headingId) {
    return {
      'aria-labelledby': headingId,
    }
  }

  return {
    'aria-label': ariaLabel,
  }
}
