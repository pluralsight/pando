import type { FormGroupOptions, FormGroupDirection } from './types'

export function getFormGroupClasses(direction: FormGroupDirection) {
  return {
    directionClass: `pando_${direction}FormControl` as const,
  }
}

export function getDefaultFormControlOptions(options?: FormGroupOptions) {
  return {
    direction: options?.direction ?? 'row',
    groupType: options?.groupType ?? 'group',
  }
}
