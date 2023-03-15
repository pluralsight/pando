export interface A11yLabelOptions {
  ariaLabel?: string
  headingId?: string
}

export function getDialogA11yLabel(options: A11yLabelOptions) {
  if (options?.headingId) {
    return {
      'aria-labelledby': options.headingId ?? '',
    }
  }

  return {
    'aria-label': options.ariaLabel ?? '',
  }
}
