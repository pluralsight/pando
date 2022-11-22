export type DialogLabelOption = 'label' | 'labelledby'

export function getA11yLabelContent(labelId?: string, label?: string) {
  return labelId || label || ''
}

export function getA11yLabelOption(labelId?: string) {
  return labelId ? 'labelledby' : 'label'
}

export function getDialogA11yLabel(label: string, option?: DialogLabelOption) {
  const defaultOption = option ?? 'label'

  if (defaultOption === 'labelledby') {
    return {
      'aria-labelledby': label,
    }
  }

  return {
    'aria-label': label,
  }
}
